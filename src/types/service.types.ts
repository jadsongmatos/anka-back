import { z } from "zod";
import 'zod-openapi/extend';

export const FinancialProductSchema = z.object({
  label: z.string().openapi({
    description: 'Financial product label',
    example: 'Personal Loan'
  }),
  interestRate: z.number().openapi({
    description: 'Interest rate percentage',
    example: 5.5
  }),
}).openapi({ ref: 'FinancialProduct' });

export const StatusSchema = z.object({
  label: z.string().openapi({
    description: 'Status label',
    example: 'Active'
  }),
  comment: z.string().nullable().optional().openapi({
    description: 'Optional status comment',
    example: 'Service is currently active'
  }),
}).openapi({ ref: 'Status' });

export const ServiceSchema = z.object({
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

export const ServiceUpdateSchema = ServiceSchema.extend({
  intangibleId: z.number().openapi({
    description: 'Intangible ID reference',
    example: 1
  }),
}).openapi({ ref: 'ServiceUpdate' });

export const ServiceIdSchema = z.object({
  id: z.coerce.number().openapi({
    description: 'Service ID',
    example: 1
  }),
}).openapi({ ref: 'ServiceId' });

export const ServiceResponseSchema = ServiceSchema.extend({
  id: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
}).openapi({ ref: 'ServiceResponse' });

export const ServicesArrayResponseSchema = z.array(ServiceResponseSchema).openapi({ 
  ref: 'ServicesArrayResponse',
  description: 'Array of services'
});

export const DeleteResponseSchema = z.object({
  message: z.string().openapi({
    description: 'Deletion confirmation message',
    example: 'Service deleted successfully'
  }),
}).openapi({ ref: 'DeleteResponse' });

export type Service = z.infer<typeof ServiceSchema>;
export type ServiceUpdate = z.infer<typeof ServiceUpdateSchema>;
export type ServiceId = z.infer<typeof ServiceIdSchema>;
