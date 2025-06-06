import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { ClientAssetSchema as ClientAssetSchemaPrisma } from "../../prisma/zod";
import { ClientAssetSchemaQuery, ParamsIdSchema } from "../types/api.types";

type ClientAssetQuery = z.infer<typeof ClientAssetSchemaQuery>;
type ParamsId = z.infer<typeof ParamsIdSchema>;
type ClientAssetSchema = z.infer<typeof ClientAssetSchemaPrisma>;

export const createClientAsset = async (
  request: FastifyRequest<{
    Body: ClientAssetSchema;
  }>,
  reply: FastifyReply
) => {
  try {
    const clientAsset = await reply.server.prisma.clientAsset.create({
      data: request.body,
      include: {
        client: true,
        asset: true,
      },
    });
    return reply.status(201).send(clientAsset);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "P2002") {
        return reply
          .status(400)
          .send({ error: "This allocation already exists" });
      }
      if (error.code === "P2003") {
        return reply
          .status(400)
          .send({ error: "Referenced client or asset does not exist" });
      }
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const getAllClientAssets = async (
  request: FastifyRequest<{
    Querystring: ClientAssetQuery;
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
            clientId: true,
            assetId: true,
            value: true,
            client: {
              select: {
                id: true,
                name: true,
              },
            },
            asset: {
              select: {
                id: true,
                name: true,
              },
            },
          };

    const clientAssets = await reply.server.prisma.clientAsset.findMany({
      select,
      orderBy: {
        id: "asc",
      },
    });

    return reply.send(clientAssets);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const getClientAssetById = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const clientAsset = await reply.server.prisma.clientAsset.findUnique({
      where: { id },
      include: {
        client: true,
        asset: true,
      },
    });

    if (!clientAsset) {
      return reply.status(404).send({ error: "Allocation not found" });
    }

    return reply.send(clientAsset);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const updateClientAsset = async (
  request: FastifyRequest<{
    Params: ParamsId;
    Body: ClientAssetSchema;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const clientAsset = await reply.server.prisma.clientAsset.update({
      where: { id },
      data: request.body,
      include: {
        client: true,
        asset: true,
      },
    });

    return reply.send(clientAsset);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "P2025") {
        return reply.status(404).send({ error: "Allocation not found" });
      }
      if (error.code === "P2002") {
        return reply
          .status(400)
          .send({ error: "This allocation already exists" });
      }
      if (error.code === "P2003") {
        return reply
          .status(400)
          .send({ error: "Referenced client or asset does not exist" });
      }
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const deleteClientAsset = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    await reply.server.prisma.clientAsset.delete({
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
      return reply.status(404).send({ error: "Allocation not found" });
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};
