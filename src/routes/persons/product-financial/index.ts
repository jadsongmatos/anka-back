import { FastifyInstance } from "fastify";
import {
  getPersonFinancialProducts,
  createPersonFinancialProduct,
  getPersonFinancialProductById,
  updatePersonFinancialProduct,
  deletePersonFinancialProduct,
} from "../../../controllers/product-financial.controller";
import {
  PersonIdParamSchema,
  ProductIdParamSchema,
  FinancialProductRequestSchema,
  UpdateFinancialProductRequestSchema,
  ErrorResponseSchema,
  GetPersonFinancialProductsResponseSchema,
  CreatePersonFinancialProductResponseSchema,
  GetPersonFinancialProductByIdResponseSchema,
  UpdatePersonFinancialProductResponseSchema,
  DeletePersonFinancialProductResponseSchema,
} from "../../../types/product-financial.types";

export default async function (fastify: FastifyInstance) {
  // Get all financial products for a person
  fastify.get(
    "/",
    {
      schema: {
        operationId: 'getPersonFinancialProducts',
        tags: ['Financial Products'],
        description: 'Get all financial products associated with a person',
        params: PersonIdParamSchema,
        response: {
          200: GetPersonFinancialProductsResponseSchema,
          404: ErrorResponseSchema,
          500: ErrorResponseSchema,
        }
      }
    },
    getPersonFinancialProducts
  );

  // Create new financial product for person
  fastify.post(
    "/",
    {
      schema: {
        operationId: 'createPersonFinancialProduct',
        tags: ['Financial Products'],
        description: 'Create a new financial product for a person',
        params: PersonIdParamSchema,
        body: FinancialProductRequestSchema,
        response: {
          201: CreatePersonFinancialProductResponseSchema,
          404: ErrorResponseSchema,
          500: ErrorResponseSchema,
        }
      }
    },
    createPersonFinancialProduct
  );

  // Get specific financial product from person
  fastify.get(
    "/:id",
    {
      schema: {
        operationId: 'getPersonFinancialProductById',
        tags: ['Financial Products'],
        description: 'Get specific financial product of a person',
        params: PersonIdParamSchema.merge(ProductIdParamSchema),
        response: {
          200: GetPersonFinancialProductByIdResponseSchema,
          404: ErrorResponseSchema,
          500: ErrorResponseSchema,
        }
      }
    },
    getPersonFinancialProductById
  );

  // Update person's financial product
  fastify.put(
    "/:id",
    {
      schema: {
        operationId: 'updatePersonFinancialProduct',
        tags: ['Financial Products'],
        description: 'Update a financial product of a person',
        params: PersonIdParamSchema.merge(ProductIdParamSchema),
        body: UpdateFinancialProductRequestSchema,
        response: {
          200: UpdatePersonFinancialProductResponseSchema,
          404: ErrorResponseSchema,
          500: ErrorResponseSchema,
        }
      }
    },
    updatePersonFinancialProduct
  );

  // Delete person's financial product
  fastify.delete(
    "/:id",
    {
      schema: {
        operationId: 'deletePersonFinancialProduct',
        tags: ['Financial Products'],
        description: 'Delete a financial product of a person',
        params: PersonIdParamSchema.merge(ProductIdParamSchema),
        response: {
          204: DeletePersonFinancialProductResponseSchema,
          404: ErrorResponseSchema,
          500: ErrorResponseSchema,
        }
      }
    },
    deletePersonFinancialProduct
  );
}