import { FastifyInstance } from "fastify";
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../../controllers/service.controller";
import {
  ServiceSchema,
  ServiceUpdateSchema,
  ServiceIdSchema,
  ServiceResponseSchema,
  ServicesArrayResponseSchema,
  DeleteResponseSchema
} from "../../types/service.types";

export default async function (fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      schema: {
        operationId: 'createService',
        tags: ['Service'],
        description: 'Create a new financial service',
        body: ServiceSchema,
        response: {
          201: ServiceResponseSchema
        }
      }
    },
    createService
  );

  fastify.get(
    "/",
    {
      schema: {
        operationId: 'getAllServices',
        tags: ['Service'],
        description: 'Get all financial services',
        response: {
          200: ServicesArrayResponseSchema
        }
      }
    },
    getAllServices
  );

  fastify.get(
    "/:id",
    {
      schema: {
        operationId: 'getServiceById',
        tags: ['Service'],
        description: 'Get financial service by ID',
        params: ServiceIdSchema,
        response: {
          200: ServiceResponseSchema
        }
      }
    },
    getServiceById
  );

  fastify.put(
    "/:id",
    {
      schema: {
        operationId: 'updateService',
        tags: ['Service'],
        description: 'Update a financial service',
        params: ServiceIdSchema,
        body: ServiceUpdateSchema,
        response: {
          200: ServiceResponseSchema
        }
      }
    },
    updateService
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: 'deleteService',
        tags: ['Service'],
        description: 'Mark a service as deleted',
        params: ServiceIdSchema,
        response: {
          200: DeleteResponseSchema
        }
      }
    },
    deleteService
  );
}