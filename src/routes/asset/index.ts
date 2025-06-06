import { FastifyInstance } from "fastify";
import z from "zod";
import {
  createAsset,
  getAllAsset,
  getAssetById,
  updateAsset,
  deleteAsset,
} from "../../controllers/asset.controller";
import {
  AssetSchema,
  AssetSchemaQuery,
  ParamsIdSchema,
  SuccessResponseSchema,
} from "../../types/api.types";

export default async function (fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      schema: {
        operationId: "createAsset",
        tags: ["Asset"],
        description: "Create a new asset",
        body: AssetSchema,
        response: {
          201: SuccessResponseSchema,
        },
      },
    },
    createAsset
  );

  fastify.get(
    "/",
    {
      schema: {
        operationId: "getAllAsset",
        tags: ["Asset"],
        description: "Get all asset",
        querystring: AssetSchemaQuery,
        response: {
          200: z.array(AssetSchema),
        },
      },
    },
    getAllAsset
  );

  fastify.get(
    "/:id",
    {
      schema: {
        operationId: "getAssetById",
        tags: ["Asset"],
        description: "Get asset by ID",
        params: ParamsIdSchema,
        response: {
          200: AssetSchema,
        },
      },
    },
    getAssetById
  );

  fastify.put(
    "/:id",
    {
      schema: {
        operationId: "updateAsset",
        tags: ["Asset"],
        description: "Update a asset",
        params: ParamsIdSchema,
        body: AssetSchema,
        response: {
          200: AssetSchema,
        },
      },
    },
    updateAsset
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: "deleteAsset",
        tags: ["Asset"],
        description: "Delete a asset",
        params: AssetSchema,
        response: {
          204: SuccessResponseSchema,
        },
      },
    },
    deleteAsset
  );
}
