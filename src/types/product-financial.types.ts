import { z } from "zod";
import 'zod-openapi/extend';

// Base schemas for monetary amount
export const MonetaryAmountInputSchema = z.object({
  value: z.number().openapi({
    description: 'Monetary value',
    example: 1000.00
  }),
  currency: z.string().optional().openapi({
    description: 'Currency code (ISO 4217)',
    example: 'BRL'
  }),
}).openapi({ ref: 'MonetaryAmountInput' });

export const MonetaryAmountOutputSchema = z.object({
  value: z.number(),
  currency: z.string(),
}).openapi({ ref: 'MonetaryAmountOutput' });

// Request schemas
export const FinancialProductRequestSchema = z.object({
  financialProductId: z.number().openapi({
    description: 'ID of the financial product',
    example: 1
  }),
  monetaryAmount: MonetaryAmountInputSchema,
}).openapi({ ref: 'FinancialProductRequest' });

export const UpdateFinancialProductRequestSchema = z.object({
  monetaryAmount: MonetaryAmountInputSchema,
}).openapi({ ref: 'UpdateFinancialProductRequest' });

// Parameter schemas
export const PersonIdParamSchema = z.object({
  personsId: z.coerce.number().openapi({
    description: 'Person ID',
    example: 1
  }),
}).openapi({ ref: 'PersonIdParam' });

export const ProductIdParamSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Product ID',
    example: 1
  }),
}).openapi({ ref: 'ProductIdParam' });

// Response schemas
export const ErrorResponseSchema = z.object({
  error: z.string(),
}).openapi({ ref: 'ErrorResponse' });

export const GetPersonFinancialProductsResponseSchema = z.object({
  personId: z.number(),
  name: z.string(),
  financialAssets: MonetaryAmountOutputSchema.nullable(),
}).openapi({ ref: 'GetPersonFinancialProductsResponse' });

export const CreatePersonFinancialProductResponseSchema = z.object({}).openapi({ 
  ref: 'CreatePersonFinancialProductResponse' 
});

export const GetPersonFinancialProductByIdResponseSchema = z.object({
  personId: z.number(),
  name: z.string(),
  financialProduct: MonetaryAmountOutputSchema,
}).openapi({ ref: 'GetPersonFinancialProductByIdResponse' });

export const UpdatePersonFinancialProductResponseSchema = z.object({}).openapi({ 
  ref: 'UpdatePersonFinancialProductResponse' 
});

export const DeletePersonFinancialProductResponseSchema = z.object({}).openapi({ 
  ref: 'DeletePersonFinancialProductResponse' 
});

// Type exports
export type MonetaryAmountInput = z.infer<typeof MonetaryAmountInputSchema>;
export type FinancialProductRequest = z.infer<typeof FinancialProductRequestSchema>;
export type PersonIdParam = z.infer<typeof PersonIdParamSchema>;
export type ProductIdParam = z.infer<typeof ProductIdParamSchema>;
