import { z } from "zod";
import 'zod-openapi/extend';
import { PersonSchema as PersonSchemaPrisma } from "../../prisma/zod";

// Base schemas for nested objects
export const PersonContactSchema = z.object({
  email: z.string().email().optional(),
  telephone: z.string().optional(),
  label: z.string(),
  comment: z.string().optional(),
}).openapi({ ref: 'PersonContact' });

export const PersonStatusSchema = z.object({
  label: z.string(),
  comment: z.string().optional(),
}).openapi({ ref: 'PersonStatus' });

// Complete Person schema
export const PersonSchema = PersonSchemaPrisma.extend({
  contact: PersonContactSchema.optional(),
  status: PersonStatusSchema.optional(),
}).openapi({ ref: 'Person' });

// Update schema
export const PersonUpdateSchema = PersonSchema.extend({
  thingId: z.number().openapi({
    description: 'Thing ID reference',
    example: 1
  }),
}).openapi({ ref: 'PersonUpdate' });

// Request parameter schema
export const PersonIdSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Person ID',
    example: 1
  }),
}).openapi({ ref: 'PersonId' });

// Response schemas
export const SuccessResponseSchema = z.object({
  success: z.boolean().openapi({
    description: 'Operation success status',
    example: true
  }),
}).openapi({ ref: 'SuccessResponse' });

// Type inferencing for TypeScript
export type Person = z.infer<typeof PersonSchema>;
export type PersonUpdate = z.infer<typeof PersonUpdateSchema>;
export type PersonId = z.infer<typeof PersonIdSchema>;
