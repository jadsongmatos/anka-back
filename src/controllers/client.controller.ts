import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { ClientSchema as ClientSchemaPrisma } from "../../prisma/zod";
import { ClientSchemaQuery, ParamsIdSchema } from "../types/api.types";

type ClientQuery = z.infer<typeof ClientSchemaQuery>;
type ParamsId = z.infer<typeof ParamsIdSchema>;
type ClientSchema = z.infer<typeof ClientSchemaPrisma>;

export const getAllClients = async (
  request: FastifyRequest<{
    Querystring: ClientQuery;
  }>,
  reply: FastifyReply
) => {
  try {
    const select =
      Object.keys(request.query).length > 0
        ? Object.keys(request.query).reduce(
            (acc, key) => ({
              ...acc,
              [key]: true,
            }),
            {}
          )
        : {
            // Default fields if none specified
            id: true,
            name: true,
            email: true,
            active: true,
          };

    const clients = await reply.server.prisma.client.findMany({
      select,
      orderBy: {
        name: "asc",
      },
    });

    return reply.send(clients);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const createClient = async (
  request: FastifyRequest<{
    Body: ClientSchema;
  }>,
  reply: FastifyReply
) => {
  try {
    const client = await reply.server.prisma.client.create({
      data: request.body,
    });
    return reply.status(201).send(client);
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return reply.status(400).send({ error: "Email already exists" });
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const getClientById = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const client = await reply.server.prisma.client.findUnique({
      where: { id },
      include: {
        allocations: {
          include: {
            asset: true,
          },
        },
      },
    });

    if (!client) {
      return reply.status(404).send({ error: "Client not found" });
    }

    return reply.send(client);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const updateClient = async (
  request: FastifyRequest<{
    Params: ParamsId;
    Body: ClientSchema;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const client = await reply.server.prisma.client.update({
      where: { id },
      data: request.body,
    });

    return reply.send(client);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "P2025") {
        return reply.status(404).send({ error: "Client not found" });
      }
      if (error.code === "P2002") {
        return reply.status(400).send({ error: "Email already exists" });
      }
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const deleteClient = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    await reply.server.prisma.client.delete({
      where: { id },
    });

    return reply.status(204).send();
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return reply.status(404).send({ error: "Client not found" });
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};
