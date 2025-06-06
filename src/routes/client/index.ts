// Rota de client
import { FastifyInstance } from "fastify";
import z from "zod";

import {
  ClientSchema,
  ClientSchemaQuery,
  ClientCreate,
  ParamsIdSchema,
  SuccessResponseSchema,
} from "../../types/api.types";

import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../../controllers/client.controller";

export default async function (fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      schema: {
        operationId: "createClient",
        tags: ["Client"],
        description: "Create a new client",
        body: ClientCreate,
        response: {
          201: ClientSchema,
        },
      },
    },
    createClient
  );

  fastify.get(
    "/",
    {
      schema: {
        operationId: "getAllClients",
        tags: ["Client"],
        description: "Get all clients",
        querystring: ClientSchemaQuery,
        response: {
          200: z.array(ClientSchema),
        },
      },
    },
    getAllClients
  );

  fastify.get(
    "/:id",
    {
      schema: {
        Client: "getClientById",
        tags: ["Client"],
        description: "Get client by ID",
        params: ParamsIdSchema,
        response: {
          200: ClientSchema,
        },
      },
    },
    getClientById
  );

  fastify.put(
    "/:id",
    {
      schema: {
        operationId: "updateClient",
        tags: ["Client"],
        description: "Update a client",
        params: ParamsIdSchema,
        body: ClientSchema,
        response: {
          200: ClientSchema,
        },
      },
    },
    updateClient
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: "deleteClient",
        tags: ["Client"],
        description: "Delete a client",
        params: ParamsIdSchema,
        response: {
          204: SuccessResponseSchema,
        },
      },
    },
    deleteClient
  );
}
