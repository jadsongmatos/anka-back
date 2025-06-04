import { FastifyInstance } from "fastify";
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../../controllers/service.controller";
import { z } from "zod";
import 'zod-openapi/extend';

// Base schemas
const FinancialProductSchema = z.object({
  label: z.string().openapi({
    description: 'Financial product label',
    example: 'Personal Loan'
  }),
  interestRate: z.number().openapi({
    description: 'Interest rate percentage',
    example: 5.5
  }),
}).openapi({ ref: 'FinancialProduct' });

const StatusSchema = z.object({
  label: z.string().openapi({
    description: 'Status label',
    example: 'Active'
  }),
  comment: z.string().nullable().optional().openapi({
    description: 'Optional status comment',
    example: 'Service is currently active'
  }),
}).openapi({ ref: 'Status' });

const ServiceSchema = z.object({
  label: z.string().openapi({
    description: 'Service label',
    example: 'Premium Banking Service'
  }),
  comment: z.string().nullable().optional().openapi({
    description: 'Optional service comment',
    example: 'Premium banking services with special rates'
  }),
  financialProduct: FinancialProductSchema,
  status: StatusSchema.optional(),
}).openapi({ ref: 'Service' });

// Request schemas
const ServiceUpdateSchema = ServiceSchema.extend({
  intangibleId: z.number().openapi({
    description: 'Intangible ID reference',
    example: 1
  }),
}).openapi({ ref: 'ServiceUpdate' });

const ServiceIdSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Service ID',
    example: 1
  }),
}).openapi({ ref: 'ServiceId' });

// Response schemas
const ServiceResponseSchema = ServiceSchema.extend({
  id: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
}).openapi({ ref: 'ServiceResponse' });

const ServicesArrayResponseSchema = z.array(ServiceResponseSchema).openapi({ 
  ref: 'ServicesArrayResponse',
  description: 'Array of services'
});

const DeleteResponseSchema = z.object({
  message: z.string().openapi({
    description: 'Deletion confirmation message',
    example: 'Service deleted successfully'
  }),
}).openapi({ ref: 'DeleteResponse' });

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