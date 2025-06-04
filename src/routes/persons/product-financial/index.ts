import { FastifyInstance } from "fastify";
import {
  getPersonFinancialProducts,
  createPersonFinancialProduct,
  getPersonFinancialProductById,
  updatePersonFinancialProduct,
  deletePersonFinancialProduct,
} from "../../../controllers/product-financial.controller";
import { z } from "zod";
import 'zod-openapi/extend';

// Base schemas for input
const MonetaryAmountInputSchema = z.object({
  value: z.number().openapi({
    description: 'Monetary value',
    example: 1000.00
  }),
  currency: z.string().optional().openapi({
    description: 'Currency code (ISO 4217)',
    example: 'BRL'
  }),
}).openapi({ ref: 'MonetaryAmountInput' });

// Base schemas for output
const MonetaryAmountOutputSchema = z.object({
  value: z.number().openapi({
    description: 'Monetary value',
    example: 1000.00
  }),
  currency: z.string().openapi({
    description: 'Currency code (ISO 4217)',
    example: 'BRL'
  }),
}).openapi({ ref: 'MonetaryAmountOutput' });

const FinancialProductRequestSchema = z.object({
  financialProductId: z.number().openapi({
    description: 'ID of the financial product',
    example: 1
  }),
  monetaryAmount: MonetaryAmountInputSchema,
}).openapi({ ref: 'FinancialProductRequest' });

const PersonIdParamSchema = z.object({
  personsId: z.coerce.number().openapi({
    description: 'Person ID',
    example: 1
  }),
}).openapi({ ref: 'PersonIdParam' });

const ProductIdParamSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Product ID',
    example: 1
  }),
}).openapi({ ref: 'ProductIdParam' });

const ErrorResponseSchema = z.object({
  error: z.string().openapi({
    description: 'Error message',
    example: 'Erro ao buscar produtos financeiros'
  }),
}).openapi({ ref: 'ErrorResponse' });

// Response schemas
const GetPersonFinancialProductsResponseSchema = z.object({
  personId: z.number(),
  name: z.string(),
  financialAssets: MonetaryAmountOutputSchema.nullable(),
}).openapi({ 
  ref: 'GetPersonFinancialProductsResponse',
  description: 'List of financial products' 
});

const CreatePersonFinancialProductResponseSchema = z.object({})
  .openapi({ 
    ref: 'CreatePersonFinancialProductResponse',
    description: 'Created financial product' 
  });

const GetPersonFinancialProductByIdResponseSchema = z.object({
  personId: z.number(),
  name: z.string(),
  financialProduct: MonetaryAmountOutputSchema,
}).openapi({ 
  ref: 'GetPersonFinancialProductByIdResponse',
  description: 'Financial product details' 
});

const UpdatePersonFinancialProductResponseSchema = z.object({})
  .openapi({ 
    ref: 'UpdatePersonFinancialProductResponse',
    description: 'Updated financial product' 
  });

const DeletePersonFinancialProductResponseSchema = z.object({})
  .openapi({ 
    ref: 'DeletePersonFinancialProductResponse',
    description: 'Financial product deleted' 
  });

// Update request schema
const UpdateFinancialProductRequestSchema = z.object({
  monetaryAmount: MonetaryAmountInputSchema,
}).openapi({ ref: 'UpdateFinancialProductRequest' });

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