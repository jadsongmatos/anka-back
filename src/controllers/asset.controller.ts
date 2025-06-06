// Controller Asset
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { AssetSchema as AssetSchemaPrisma } from "../../prisma/zod";
import { AssetSchemaQuery, ParamsIdSchema } from "../types/api.types";

type AssetQuery = z.infer<typeof AssetSchemaQuery>;
type ParamsId = z.infer<typeof ParamsIdSchema>;
type AssetSchema = z.infer<typeof AssetSchemaPrisma>;

export const createAsset = async (
  request: FastifyRequest<{
    Body: AssetSchema;
  }>,
  reply: FastifyReply
) => {
  try {
    const asset = await reply.server.prisma.asset.create({
      data: request.body,
    });
    return reply.status(201).send(asset);
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return reply.status(400).send({ error: "Asset name already exists" });
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const getAllAsset = async (
  request: FastifyRequest<{
    Querystring: AssetQuery;
  }>,
  reply: FastifyReply
) => {
  try {
    const select =
      Object.keys(request.query).length > 0
        ? Object.keys(request.query).reduce(
            (acc, key) => ({
              ...acc,
              [key]:
                key === "allocations"
                  ? {
                      select: {
                        id: true,
                        value: true,
                        client: {
                          select: {
                            id: true,
                            name: true,
                          },
                        },
                      },
                    }
                  : true,
            }),
            {}
          )
        : {
            // Default fields if none specified
            id: true,
            name: true,
            allocations: {
              select: {
                id: true,
                value: true,
                client: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          };

    const assets = await reply.server.prisma.asset.findMany({
      select,
      orderBy: {
        name: "asc",
      },
    });

    return reply.send(assets);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const getAssetById = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const asset = await reply.server.prisma.asset.findUnique({
      where: { id },
      include: {
        allocations: {
          include: {
            client: true,
          },
        },
      },
    });

    if (!asset) {
      return reply.status(404).send({ error: "Asset not found" });
    }

    return reply.send(asset);
  } catch (error) {
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const updateAsset = async (
  request: FastifyRequest<{
    Params: ParamsId;
    Body: AssetSchema;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    const asset = await reply.server.prisma.asset.update({
      where: { id },
      data: request.body,
    });

    return reply.send(asset);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "P2025") {
        return reply.status(404).send({ error: "Asset not found" });
      }
      if (error.code === "P2002") {
        return reply.status(400).send({ error: "Asset name already exists" });
      }
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};

export const deleteAsset = async (
  request: FastifyRequest<{
    Params: ParamsId;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  try {
    await reply.server.prisma.asset.delete({
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
      return reply.status(404).send({ error: "Asset not found" });
    }
    return reply.status(500).send({ error: "Internal server error" });
  }
};
