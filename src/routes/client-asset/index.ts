import { FastifyInstance } from "fastify";
import z from "zod";
import {
  createClientAsset,
  getAllClientAssets,
  getClientAssetById,
  updateClientAsset,
  deleteClientAsset,
} from "../../controllers/client-asset.controller";

import {
  ClientAssetSchema,
  ClientAssetSchemaQuery,
  ParamsIdSchema,
  SuccessResponseSchema,
} from "../../types/api.types";

export default async function (fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      schema: {
        operationId: "createClientAsset",
        tags: ["ClientAsset"],
        description: "Create a new client asset allocation",
        body: ClientAssetSchema,
        response: {
          201: SuccessResponseSchema,
        },
      },
    },
    createClientAsset
  );

  fastify.get(
    "/",
    {
      schema: {
        operationId: "getAllClientAssets",
        tags: ["ClientAsset"],
        description: "Get all client asset allocations",
        querystring: ClientAssetSchemaQuery,
        response: {
          200: z.array(ClientAssetSchema),
        },
      },
    },
    getAllClientAssets
  );

  fastify.get(
    "/:id",
    {
      schema: {
        operationId: "getClientAssetById",
        tags: ["ClientAsset"],
        description: "Get client asset allocation by ID",
        params: ParamsIdSchema,
        response: {
          200: ClientAssetSchema,
        },
      },
    },
    getClientAssetById
  );

  fastify.put(
    "/:id",
    {
      schema: {
        operationId: "updateClientAsset",
        tags: ["ClientAsset"],
        description: "Update a client asset allocation",
        params: ParamsIdSchema,
        body: ClientAssetSchema,
        response: {
          200: ClientAssetSchema,
        },
      },
    },
    updateClientAsset
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: "deleteClientAsset",
        tags: ["ClientAsset"],
        description: "Delete a client asset allocation",
        params: ParamsIdSchema,
        response: {
          204: SuccessResponseSchema,
        },
      },
    },
    deleteClientAsset
  );
}
