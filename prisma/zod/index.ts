import { z } from 'zod';
import type { Prisma } from '../../generated/prisma';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const ThingScalarFieldEnumSchema = z.enum(['id','label','comment']);

export const IntangibleScalarFieldEnumSchema = z.enum(['id','label','comment','thingId']);

export const StructuredValueScalarFieldEnumSchema = z.enum(['id','label','comment','intangibleId']);

export const ContactPointScalarFieldEnumSchema = z.enum(['id','label','comment','email','telephone','structuredValueId']);

export const ServiceScalarFieldEnumSchema = z.enum(['id','intangibleId']);

export const FinancialProductScalarFieldEnumSchema = z.enum(['id','serviceId','label','interestRate']);

export const OrganizationScalarFieldEnumSchema = z.enum(['id','label','comment','thingId']);

export const GovernmentOrganizationScalarFieldEnumSchema = z.enum(['id','label','comment','organizationId']);

export const PersonScalarFieldEnumSchema = z.enum(['id','label','comment','thingId']);

export const MonetaryAmountScalarFieldEnumSchema = z.enum(['id','structuredValueId','value','currency']);

export const StatusEnumerationScalarFieldEnumSchema = z.enum(['id','label','comment','intangibleId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// THING SCHEMA
/////////////////////////////////////////

export const ThingSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
})

export type Thing = z.infer<typeof ThingSchema>

/////////////////////////////////////////
// INTANGIBLE SCHEMA
/////////////////////////////////////////

export const IntangibleSchema = z.object({
  id: z.number().int(),
  label: z.string().nullable(),
  comment: z.string().nullable(),
  thingId: z.number().int(),
})

export type Intangible = z.infer<typeof IntangibleSchema>

/////////////////////////////////////////
// STRUCTURED VALUE SCHEMA
/////////////////////////////////////////

export const StructuredValueSchema = z.object({
  id: z.number().int(),
  label: z.string().nullable(),
  comment: z.string().nullable(),
  intangibleId: z.number().int(),
})

export type StructuredValue = z.infer<typeof StructuredValueSchema>

/////////////////////////////////////////
// CONTACT POINT SCHEMA
/////////////////////////////////////////

export const ContactPointSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
  email: z.string().nullable(),
  telephone: z.string().nullable(),
  structuredValueId: z.number().int(),
})

export type ContactPoint = z.infer<typeof ContactPointSchema>

/////////////////////////////////////////
// SERVICE SCHEMA
/////////////////////////////////////////

export const ServiceSchema = z.object({
  id: z.number().int(),
  intangibleId: z.number().int(),
})

export type Service = z.infer<typeof ServiceSchema>

/////////////////////////////////////////
// FINANCIAL PRODUCT SCHEMA
/////////////////////////////////////////

export const FinancialProductSchema = z.object({
  id: z.number().int(),
  serviceId: z.number().int(),
  label: z.string(),
  interestRate: z.number(),
})

export type FinancialProduct = z.infer<typeof FinancialProductSchema>

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
  thingId: z.number().int(),
})

export type Organization = z.infer<typeof OrganizationSchema>

/////////////////////////////////////////
// GOVERNMENT ORGANIZATION SCHEMA
/////////////////////////////////////////

export const GovernmentOrganizationSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
  organizationId: z.number().int(),
})

export type GovernmentOrganization = z.infer<typeof GovernmentOrganizationSchema>

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
  thingId: z.number().int(),
})

export type Person = z.infer<typeof PersonSchema>

/////////////////////////////////////////
// MONETARY AMOUNT SCHEMA
/////////////////////////////////////////

export const MonetaryAmountSchema = z.object({
  id: z.number().int(),
  structuredValueId: z.number().int(),
  value: z.number(),
  currency: z.string(),
})

export type MonetaryAmount = z.infer<typeof MonetaryAmountSchema>

/////////////////////////////////////////
// STATUS ENUMERATION SCHEMA
/////////////////////////////////////////

export const StatusEnumerationSchema = z.object({
  id: z.number().int(),
  label: z.string(),
  comment: z.string().nullable(),
  intangibleId: z.number().int(),
})

export type StatusEnumeration = z.infer<typeof StatusEnumerationSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// THING
//------------------------------------------------------

export const ThingIncludeSchema: z.ZodType<Prisma.ThingInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
}).strict()

export const ThingArgsSchema: z.ZodType<Prisma.ThingDefaultArgs> = z.object({
  select: z.lazy(() => ThingSelectSchema).optional(),
  include: z.lazy(() => ThingIncludeSchema).optional(),
}).strict();

export const ThingSelectSchema: z.ZodType<Prisma.ThingSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
}).strict()

// INTANGIBLE
//------------------------------------------------------

export const IntangibleIncludeSchema: z.ZodType<Prisma.IntangibleInclude> = z.object({
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
  statusEnumeration: z.union([z.boolean(),z.lazy(() => StatusEnumerationArgsSchema)]).optional(),
}).strict()

export const IntangibleArgsSchema: z.ZodType<Prisma.IntangibleDefaultArgs> = z.object({
  select: z.lazy(() => IntangibleSelectSchema).optional(),
  include: z.lazy(() => IntangibleIncludeSchema).optional(),
}).strict();

export const IntangibleSelectSchema: z.ZodType<Prisma.IntangibleSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  thingId: z.boolean().optional(),
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
  statusEnumeration: z.union([z.boolean(),z.lazy(() => StatusEnumerationArgsSchema)]).optional(),
}).strict()

// STRUCTURED VALUE
//------------------------------------------------------

export const StructuredValueIncludeSchema: z.ZodType<Prisma.StructuredValueInclude> = z.object({
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
  monetaryAmount: z.union([z.boolean(),z.lazy(() => MonetaryAmountArgsSchema)]).optional(),
  contactPoint: z.union([z.boolean(),z.lazy(() => ContactPointArgsSchema)]).optional(),
}).strict()

export const StructuredValueArgsSchema: z.ZodType<Prisma.StructuredValueDefaultArgs> = z.object({
  select: z.lazy(() => StructuredValueSelectSchema).optional(),
  include: z.lazy(() => StructuredValueIncludeSchema).optional(),
}).strict();

export const StructuredValueSelectSchema: z.ZodType<Prisma.StructuredValueSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  intangibleId: z.boolean().optional(),
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
  monetaryAmount: z.union([z.boolean(),z.lazy(() => MonetaryAmountArgsSchema)]).optional(),
  contactPoint: z.union([z.boolean(),z.lazy(() => ContactPointArgsSchema)]).optional(),
}).strict()

// CONTACT POINT
//------------------------------------------------------

export const ContactPointIncludeSchema: z.ZodType<Prisma.ContactPointInclude> = z.object({
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
}).strict()

export const ContactPointArgsSchema: z.ZodType<Prisma.ContactPointDefaultArgs> = z.object({
  select: z.lazy(() => ContactPointSelectSchema).optional(),
  include: z.lazy(() => ContactPointIncludeSchema).optional(),
}).strict();

export const ContactPointSelectSchema: z.ZodType<Prisma.ContactPointSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  email: z.boolean().optional(),
  telephone: z.boolean().optional(),
  structuredValueId: z.boolean().optional(),
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
}).strict()

// SERVICE
//------------------------------------------------------

export const ServiceIncludeSchema: z.ZodType<Prisma.ServiceInclude> = z.object({
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
  financialProduct: z.union([z.boolean(),z.lazy(() => FinancialProductArgsSchema)]).optional(),
}).strict()

export const ServiceArgsSchema: z.ZodType<Prisma.ServiceDefaultArgs> = z.object({
  select: z.lazy(() => ServiceSelectSchema).optional(),
  include: z.lazy(() => ServiceIncludeSchema).optional(),
}).strict();

export const ServiceSelectSchema: z.ZodType<Prisma.ServiceSelect> = z.object({
  id: z.boolean().optional(),
  intangibleId: z.boolean().optional(),
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
  financialProduct: z.union([z.boolean(),z.lazy(() => FinancialProductArgsSchema)]).optional(),
}).strict()

// FINANCIAL PRODUCT
//------------------------------------------------------

export const FinancialProductIncludeSchema: z.ZodType<Prisma.FinancialProductInclude> = z.object({
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
}).strict()

export const FinancialProductArgsSchema: z.ZodType<Prisma.FinancialProductDefaultArgs> = z.object({
  select: z.lazy(() => FinancialProductSelectSchema).optional(),
  include: z.lazy(() => FinancialProductIncludeSchema).optional(),
}).strict();

export const FinancialProductSelectSchema: z.ZodType<Prisma.FinancialProductSelect> = z.object({
  id: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  label: z.boolean().optional(),
  interestRate: z.boolean().optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
}).strict()

// ORGANIZATION
//------------------------------------------------------

export const OrganizationIncludeSchema: z.ZodType<Prisma.OrganizationInclude> = z.object({
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
  governmentOrganization: z.union([z.boolean(),z.lazy(() => GovernmentOrganizationArgsSchema)]).optional(),
}).strict()

export const OrganizationArgsSchema: z.ZodType<Prisma.OrganizationDefaultArgs> = z.object({
  select: z.lazy(() => OrganizationSelectSchema).optional(),
  include: z.lazy(() => OrganizationIncludeSchema).optional(),
}).strict();

export const OrganizationSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  thingId: z.boolean().optional(),
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
  governmentOrganization: z.union([z.boolean(),z.lazy(() => GovernmentOrganizationArgsSchema)]).optional(),
}).strict()

// GOVERNMENT ORGANIZATION
//------------------------------------------------------

export const GovernmentOrganizationIncludeSchema: z.ZodType<Prisma.GovernmentOrganizationInclude> = z.object({
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export const GovernmentOrganizationArgsSchema: z.ZodType<Prisma.GovernmentOrganizationDefaultArgs> = z.object({
  select: z.lazy(() => GovernmentOrganizationSelectSchema).optional(),
  include: z.lazy(() => GovernmentOrganizationIncludeSchema).optional(),
}).strict();

export const GovernmentOrganizationSelectSchema: z.ZodType<Prisma.GovernmentOrganizationSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

// PERSON
//------------------------------------------------------

export const PersonIncludeSchema: z.ZodType<Prisma.PersonInclude> = z.object({
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
}).strict()

export const PersonArgsSchema: z.ZodType<Prisma.PersonDefaultArgs> = z.object({
  select: z.lazy(() => PersonSelectSchema).optional(),
  include: z.lazy(() => PersonIncludeSchema).optional(),
}).strict();

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  thingId: z.boolean().optional(),
  thing: z.union([z.boolean(),z.lazy(() => ThingArgsSchema)]).optional(),
}).strict()

// MONETARY AMOUNT
//------------------------------------------------------

export const MonetaryAmountIncludeSchema: z.ZodType<Prisma.MonetaryAmountInclude> = z.object({
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
}).strict()

export const MonetaryAmountArgsSchema: z.ZodType<Prisma.MonetaryAmountDefaultArgs> = z.object({
  select: z.lazy(() => MonetaryAmountSelectSchema).optional(),
  include: z.lazy(() => MonetaryAmountIncludeSchema).optional(),
}).strict();

export const MonetaryAmountSelectSchema: z.ZodType<Prisma.MonetaryAmountSelect> = z.object({
  id: z.boolean().optional(),
  structuredValueId: z.boolean().optional(),
  value: z.boolean().optional(),
  currency: z.boolean().optional(),
  structuredValue: z.union([z.boolean(),z.lazy(() => StructuredValueArgsSchema)]).optional(),
}).strict()

// STATUS ENUMERATION
//------------------------------------------------------

export const StatusEnumerationIncludeSchema: z.ZodType<Prisma.StatusEnumerationInclude> = z.object({
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
}).strict()

export const StatusEnumerationArgsSchema: z.ZodType<Prisma.StatusEnumerationDefaultArgs> = z.object({
  select: z.lazy(() => StatusEnumerationSelectSchema).optional(),
  include: z.lazy(() => StatusEnumerationIncludeSchema).optional(),
}).strict();

export const StatusEnumerationSelectSchema: z.ZodType<Prisma.StatusEnumerationSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  comment: z.boolean().optional(),
  intangibleId: z.boolean().optional(),
  intangible: z.union([z.boolean(),z.lazy(() => IntangibleArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ThingWhereInputSchema: z.ZodType<Prisma.ThingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonNullableScalarRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  intangible: z.union([ z.lazy(() => IntangibleNullableScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ThingOrderByWithRelationInputSchema: z.ZodType<Prisma.ThingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  intangible: z.lazy(() => IntangibleOrderByWithRelationInputSchema).optional()
}).strict();

export const ThingWhereUniqueInputSchema: z.ZodType<Prisma.ThingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonNullableScalarRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  intangible: z.union([ z.lazy(() => IntangibleNullableScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ThingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ThingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ThingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ThingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ThingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ThingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ThingSumOrderByAggregateInputSchema).optional()
}).strict();

export const ThingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ThingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ThingScalarWhereWithAggregatesInputSchema),z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingScalarWhereWithAggregatesInputSchema),z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const IntangibleWhereInputSchema: z.ZodType<Prisma.IntangibleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IntangibleWhereInputSchema),z.lazy(() => IntangibleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IntangibleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IntangibleWhereInputSchema),z.lazy(() => IntangibleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceNullableScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional().nullable(),
  structuredValue: z.union([ z.lazy(() => StructuredValueNullableScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional().nullable(),
  statusEnumeration: z.union([ z.lazy(() => StatusEnumerationNullableScalarRelationFilterSchema),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional().nullable(),
}).strict();

export const IntangibleOrderByWithRelationInputSchema: z.ZodType<Prisma.IntangibleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  thing: z.lazy(() => ThingOrderByWithRelationInputSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueOrderByWithRelationInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationOrderByWithRelationInputSchema).optional()
}).strict();

export const IntangibleWhereUniqueInputSchema: z.ZodType<Prisma.IntangibleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    thingId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    thingId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  thingId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => IntangibleWhereInputSchema),z.lazy(() => IntangibleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IntangibleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IntangibleWhereInputSchema),z.lazy(() => IntangibleWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceNullableScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional().nullable(),
  structuredValue: z.union([ z.lazy(() => StructuredValueNullableScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional().nullable(),
  statusEnumeration: z.union([ z.lazy(() => StatusEnumerationNullableScalarRelationFilterSchema),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional().nullable(),
}).strict());

export const IntangibleOrderByWithAggregationInputSchema: z.ZodType<Prisma.IntangibleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IntangibleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IntangibleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IntangibleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IntangibleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IntangibleSumOrderByAggregateInputSchema).optional()
}).strict();

export const IntangibleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IntangibleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => IntangibleScalarWhereWithAggregatesInputSchema),z.lazy(() => IntangibleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IntangibleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IntangibleScalarWhereWithAggregatesInputSchema),z.lazy(() => IntangibleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const StructuredValueWhereInputSchema: z.ZodType<Prisma.StructuredValueWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StructuredValueWhereInputSchema),z.lazy(() => StructuredValueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StructuredValueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StructuredValueWhereInputSchema),z.lazy(() => StructuredValueWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  intangibleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  monetaryAmount: z.union([ z.lazy(() => MonetaryAmountNullableScalarRelationFilterSchema),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional().nullable(),
  contactPoint: z.union([ z.lazy(() => ContactPointNullableScalarRelationFilterSchema),z.lazy(() => ContactPointWhereInputSchema) ]).optional().nullable(),
}).strict();

export const StructuredValueOrderByWithRelationInputSchema: z.ZodType<Prisma.StructuredValueOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  intangible: z.lazy(() => IntangibleOrderByWithRelationInputSchema).optional(),
  monetaryAmount: z.lazy(() => MonetaryAmountOrderByWithRelationInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointOrderByWithRelationInputSchema).optional()
}).strict();

export const StructuredValueWhereUniqueInputSchema: z.ZodType<Prisma.StructuredValueWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    intangibleId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    intangibleId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => StructuredValueWhereInputSchema),z.lazy(() => StructuredValueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StructuredValueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StructuredValueWhereInputSchema),z.lazy(() => StructuredValueWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  monetaryAmount: z.union([ z.lazy(() => MonetaryAmountNullableScalarRelationFilterSchema),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional().nullable(),
  contactPoint: z.union([ z.lazy(() => ContactPointNullableScalarRelationFilterSchema),z.lazy(() => ContactPointWhereInputSchema) ]).optional().nullable(),
}).strict());

export const StructuredValueOrderByWithAggregationInputSchema: z.ZodType<Prisma.StructuredValueOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StructuredValueCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StructuredValueAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StructuredValueMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StructuredValueMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StructuredValueSumOrderByAggregateInputSchema).optional()
}).strict();

export const StructuredValueScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StructuredValueScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StructuredValueScalarWhereWithAggregatesInputSchema),z.lazy(() => StructuredValueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StructuredValueScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StructuredValueScalarWhereWithAggregatesInputSchema),z.lazy(() => StructuredValueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  intangibleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ContactPointWhereInputSchema: z.ZodType<Prisma.ContactPointWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContactPointWhereInputSchema),z.lazy(() => ContactPointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactPointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactPointWhereInputSchema),z.lazy(() => ContactPointWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  structuredValueId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  structuredValue: z.union([ z.lazy(() => StructuredValueScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
}).strict();

export const ContactPointOrderByWithRelationInputSchema: z.ZodType<Prisma.ContactPointOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  telephone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueOrderByWithRelationInputSchema).optional()
}).strict();

export const ContactPointWhereUniqueInputSchema: z.ZodType<Prisma.ContactPointWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    structuredValueId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    structuredValueId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  structuredValueId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ContactPointWhereInputSchema),z.lazy(() => ContactPointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactPointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactPointWhereInputSchema),z.lazy(() => ContactPointWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  structuredValue: z.union([ z.lazy(() => StructuredValueScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
}).strict());

export const ContactPointOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContactPointOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  telephone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContactPointCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ContactPointAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContactPointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContactPointMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ContactPointSumOrderByAggregateInputSchema).optional()
}).strict();

export const ContactPointScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContactPointScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContactPointScalarWhereWithAggregatesInputSchema),z.lazy(() => ContactPointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactPointScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactPointScalarWhereWithAggregatesInputSchema),z.lazy(() => ContactPointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  structuredValueId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ServiceWhereInputSchema: z.ZodType<Prisma.ServiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  intangibleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  financialProduct: z.union([ z.lazy(() => FinancialProductNullableScalarRelationFilterSchema),z.lazy(() => FinancialProductWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ServiceOrderByWithRelationInputSchema: z.ZodType<Prisma.ServiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  intangible: z.lazy(() => IntangibleOrderByWithRelationInputSchema).optional(),
  financialProduct: z.lazy(() => FinancialProductOrderByWithRelationInputSchema).optional()
}).strict();

export const ServiceWhereUniqueInputSchema: z.ZodType<Prisma.ServiceWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    intangibleId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    intangibleId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  financialProduct: z.union([ z.lazy(() => FinancialProductNullableScalarRelationFilterSchema),z.lazy(() => FinancialProductWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ServiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ServiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const ServiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  intangibleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const FinancialProductWhereInputSchema: z.ZodType<Prisma.FinancialProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FinancialProductWhereInputSchema),z.lazy(() => FinancialProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FinancialProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FinancialProductWhereInputSchema),z.lazy(() => FinancialProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serviceId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  interestRate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
}).strict();

export const FinancialProductOrderByWithRelationInputSchema: z.ZodType<Prisma.FinancialProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional()
}).strict();

export const FinancialProductWhereUniqueInputSchema: z.ZodType<Prisma.FinancialProductWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    serviceId: z.number().int(),
    label: z.string()
  }),
  z.object({
    id: z.number().int(),
    serviceId: z.number().int(),
  }),
  z.object({
    id: z.number().int(),
    label: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    serviceId: z.number().int(),
    label: z.string(),
  }),
  z.object({
    serviceId: z.number().int(),
  }),
  z.object({
    label: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  serviceId: z.number().int().optional(),
  label: z.string().optional(),
  AND: z.union([ z.lazy(() => FinancialProductWhereInputSchema),z.lazy(() => FinancialProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FinancialProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FinancialProductWhereInputSchema),z.lazy(() => FinancialProductWhereInputSchema).array() ]).optional(),
  interestRate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
}).strict());

export const FinancialProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.FinancialProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FinancialProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FinancialProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FinancialProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FinancialProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FinancialProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const FinancialProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FinancialProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FinancialProductScalarWhereWithAggregatesInputSchema),z.lazy(() => FinancialProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FinancialProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FinancialProductScalarWhereWithAggregatesInputSchema),z.lazy(() => FinancialProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serviceId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  interestRate: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const OrganizationWhereInputSchema: z.ZodType<Prisma.OrganizationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
  governmentOrganization: z.union([ z.lazy(() => GovernmentOrganizationNullableScalarRelationFilterSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  thing: z.lazy(() => ThingOrderByWithRelationInputSchema).optional(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationOrderByWithRelationInputSchema).optional()
}).strict();

export const OrganizationWhereUniqueInputSchema: z.ZodType<Prisma.OrganizationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    thingId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    thingId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  thingId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
  governmentOrganization: z.union([ z.lazy(() => GovernmentOrganizationNullableScalarRelationFilterSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional().nullable(),
}).strict());

export const OrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganizationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganizationSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrganizationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrganizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const GovernmentOrganizationWhereInputSchema: z.ZodType<Prisma.GovernmentOrganizationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GovernmentOrganizationWhereInputSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GovernmentOrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GovernmentOrganizationWhereInputSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
}).strict();

export const GovernmentOrganizationOrderByWithRelationInputSchema: z.ZodType<Prisma.GovernmentOrganizationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional()
}).strict();

export const GovernmentOrganizationWhereUniqueInputSchema: z.ZodType<Prisma.GovernmentOrganizationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    organizationId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    organizationId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  organizationId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => GovernmentOrganizationWhereInputSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GovernmentOrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GovernmentOrganizationWhereInputSchema),z.lazy(() => GovernmentOrganizationWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
}).strict());

export const GovernmentOrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.GovernmentOrganizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GovernmentOrganizationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GovernmentOrganizationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GovernmentOrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GovernmentOrganizationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GovernmentOrganizationSumOrderByAggregateInputSchema).optional()
}).strict();

export const GovernmentOrganizationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GovernmentOrganizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GovernmentOrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => GovernmentOrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GovernmentOrganizationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GovernmentOrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => GovernmentOrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const PersonWhereInputSchema: z.ZodType<Prisma.PersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
}).strict();

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  thing: z.lazy(() => ThingOrderByWithRelationInputSchema).optional()
}).strict();

export const PersonWhereUniqueInputSchema: z.ZodType<Prisma.PersonWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    thingId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    thingId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  thingId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thing: z.union([ z.lazy(() => ThingScalarRelationFilterSchema),z.lazy(() => ThingWhereInputSchema) ]).optional(),
}).strict());

export const PersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonSumOrderByAggregateInputSchema).optional()
}).strict();

export const PersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  thingId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const MonetaryAmountWhereInputSchema: z.ZodType<Prisma.MonetaryAmountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MonetaryAmountWhereInputSchema),z.lazy(() => MonetaryAmountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MonetaryAmountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MonetaryAmountWhereInputSchema),z.lazy(() => MonetaryAmountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  structuredValueId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  structuredValue: z.union([ z.lazy(() => StructuredValueScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountOrderByWithRelationInputSchema: z.ZodType<Prisma.MonetaryAmountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueOrderByWithRelationInputSchema).optional()
}).strict();

export const MonetaryAmountWhereUniqueInputSchema: z.ZodType<Prisma.MonetaryAmountWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    structuredValueId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    structuredValueId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  structuredValueId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => MonetaryAmountWhereInputSchema),z.lazy(() => MonetaryAmountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MonetaryAmountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MonetaryAmountWhereInputSchema),z.lazy(() => MonetaryAmountWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  structuredValue: z.union([ z.lazy(() => StructuredValueScalarRelationFilterSchema),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
}).strict());

export const MonetaryAmountOrderByWithAggregationInputSchema: z.ZodType<Prisma.MonetaryAmountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MonetaryAmountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MonetaryAmountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MonetaryAmountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MonetaryAmountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MonetaryAmountSumOrderByAggregateInputSchema).optional()
}).strict();

export const MonetaryAmountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MonetaryAmountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MonetaryAmountScalarWhereWithAggregatesInputSchema),z.lazy(() => MonetaryAmountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MonetaryAmountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MonetaryAmountScalarWhereWithAggregatesInputSchema),z.lazy(() => MonetaryAmountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  structuredValueId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const StatusEnumerationWhereInputSchema: z.ZodType<Prisma.StatusEnumerationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StatusEnumerationWhereInputSchema),z.lazy(() => StatusEnumerationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StatusEnumerationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StatusEnumerationWhereInputSchema),z.lazy(() => StatusEnumerationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  intangibleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
}).strict();

export const StatusEnumerationOrderByWithRelationInputSchema: z.ZodType<Prisma.StatusEnumerationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  intangible: z.lazy(() => IntangibleOrderByWithRelationInputSchema).optional()
}).strict();

export const StatusEnumerationWhereUniqueInputSchema: z.ZodType<Prisma.StatusEnumerationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    intangibleId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    intangibleId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => StatusEnumerationWhereInputSchema),z.lazy(() => StatusEnumerationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StatusEnumerationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StatusEnumerationWhereInputSchema),z.lazy(() => StatusEnumerationWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  intangible: z.union([ z.lazy(() => IntangibleScalarRelationFilterSchema),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
}).strict());

export const StatusEnumerationOrderByWithAggregationInputSchema: z.ZodType<Prisma.StatusEnumerationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StatusEnumerationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StatusEnumerationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StatusEnumerationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StatusEnumerationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StatusEnumerationSumOrderByAggregateInputSchema).optional()
}).strict();

export const StatusEnumerationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StatusEnumerationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StatusEnumerationScalarWhereWithAggregatesInputSchema),z.lazy(() => StatusEnumerationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StatusEnumerationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StatusEnumerationScalarWhereWithAggregatesInputSchema),z.lazy(() => StatusEnumerationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  intangibleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ThingCreateInputSchema: z.ZodType<Prisma.ThingCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutThingInputSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingUncheckedCreateInputSchema: z.ZodType<Prisma.ThingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonUncheckedCreateNestedOneWithoutThingInputSchema).optional(),
  organization: z.lazy(() => OrganizationUncheckedCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingUpdateInputSchema: z.ZodType<Prisma.ThingUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneWithoutThingNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingUncheckedUpdateInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUncheckedUpdateOneWithoutThingNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUncheckedUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingCreateManyInputSchema: z.ZodType<Prisma.ThingCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const ThingUpdateManyMutationInputSchema: z.ZodType<Prisma.ThingUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ThingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntangibleCreateInputSchema: z.ZodType<Prisma.IntangibleCreateInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutIntangibleInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int(),
  service: z.lazy(() => ServiceUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUpdateInputSchema: z.ZodType<Prisma.IntangibleUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutIntangibleNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleUncheckedUpdateInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleCreateManyInputSchema: z.ZodType<Prisma.IntangibleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int()
}).strict();

export const IntangibleUpdateManyMutationInputSchema: z.ZodType<Prisma.IntangibleUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntangibleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StructuredValueCreateInputSchema: z.ZodType<Prisma.StructuredValueCreateInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutStructuredValueInputSchema),
  monetaryAmount: z.lazy(() => MonetaryAmountCreateNestedOneWithoutStructuredValueInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueUncheckedCreateInputSchema: z.ZodType<Prisma.StructuredValueUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueUpdateInputSchema: z.ZodType<Prisma.StructuredValueUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutStructuredValueNestedInputSchema).optional(),
  monetaryAmount: z.lazy(() => MonetaryAmountUpdateOneWithoutStructuredValueNestedInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StructuredValueUncheckedUpdateInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StructuredValueCreateManyInputSchema: z.ZodType<Prisma.StructuredValueCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int()
}).strict();

export const StructuredValueUpdateManyMutationInputSchema: z.ZodType<Prisma.StructuredValueUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StructuredValueUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactPointCreateInputSchema: z.ZodType<Prisma.ContactPointCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string().optional().nullable(),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutContactPointInputSchema)
}).strict();

export const ContactPointUncheckedCreateInputSchema: z.ZodType<Prisma.ContactPointUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string().optional().nullable(),
  structuredValueId: z.number().int()
}).strict();

export const ContactPointUpdateInputSchema: z.ZodType<Prisma.ContactPointUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneRequiredWithoutContactPointNestedInputSchema).optional()
}).strict();

export const ContactPointUncheckedUpdateInputSchema: z.ZodType<Prisma.ContactPointUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  structuredValueId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactPointCreateManyInputSchema: z.ZodType<Prisma.ContactPointCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string().optional().nullable(),
  structuredValueId: z.number().int()
}).strict();

export const ContactPointUpdateManyMutationInputSchema: z.ZodType<Prisma.ContactPointUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContactPointUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContactPointUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  structuredValueId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceCreateInputSchema: z.ZodType<Prisma.ServiceCreateInput> = z.object({
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutServiceInputSchema),
  financialProduct: z.lazy(() => FinancialProductCreateNestedOneWithoutServiceInputSchema).optional()
}).strict();

export const ServiceUncheckedCreateInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int(),
  financialProduct: z.lazy(() => FinancialProductUncheckedCreateNestedOneWithoutServiceInputSchema).optional()
}).strict();

export const ServiceUpdateInputSchema: z.ZodType<Prisma.ServiceUpdateInput> = z.object({
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutServiceNestedInputSchema).optional(),
  financialProduct: z.lazy(() => FinancialProductUpdateOneWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  financialProduct: z.lazy(() => FinancialProductUncheckedUpdateOneWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceCreateManyInputSchema: z.ZodType<Prisma.ServiceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int()
}).strict();

export const ServiceUpdateManyMutationInputSchema: z.ZodType<Prisma.ServiceUpdateManyMutationInput> = z.object({
}).strict();

export const ServiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FinancialProductCreateInputSchema: z.ZodType<Prisma.FinancialProductCreateInput> = z.object({
  label: z.string(),
  interestRate: z.number(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutFinancialProductInputSchema)
}).strict();

export const FinancialProductUncheckedCreateInputSchema: z.ZodType<Prisma.FinancialProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  serviceId: z.number().int(),
  label: z.string(),
  interestRate: z.number()
}).strict();

export const FinancialProductUpdateInputSchema: z.ZodType<Prisma.FinancialProductUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutFinancialProductNestedInputSchema).optional()
}).strict();

export const FinancialProductUncheckedUpdateInputSchema: z.ZodType<Prisma.FinancialProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FinancialProductCreateManyInputSchema: z.ZodType<Prisma.FinancialProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  serviceId: z.number().int(),
  label: z.string(),
  interestRate: z.number()
}).strict();

export const FinancialProductUpdateManyMutationInputSchema: z.ZodType<Prisma.FinancialProductUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FinancialProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FinancialProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateInputSchema: z.ZodType<Prisma.OrganizationCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutOrganizationInputSchema),
  governmentOrganization: z.lazy(() => GovernmentOrganizationCreateNestedOneWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUpdateInputSchema: z.ZodType<Prisma.OrganizationUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutOrganizationNestedInputSchema).optional(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUpdateOneWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationCreateManyInputSchema: z.ZodType<Prisma.OrganizationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int()
}).strict();

export const OrganizationUpdateManyMutationInputSchema: z.ZodType<Prisma.OrganizationUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GovernmentOrganizationCreateInputSchema: z.ZodType<Prisma.GovernmentOrganizationCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutGovernmentOrganizationInputSchema)
}).strict();

export const GovernmentOrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  organizationId: z.number().int()
}).strict();

export const GovernmentOrganizationUpdateInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutGovernmentOrganizationNestedInputSchema).optional()
}).strict();

export const GovernmentOrganizationUncheckedUpdateInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GovernmentOrganizationCreateManyInputSchema: z.ZodType<Prisma.GovernmentOrganizationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  organizationId: z.number().int()
}).strict();

export const GovernmentOrganizationUpdateManyMutationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GovernmentOrganizationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonCreateInputSchema: z.ZodType<Prisma.PersonCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutPersonInputSchema)
}).strict();

export const PersonUncheckedCreateInputSchema: z.ZodType<Prisma.PersonUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int()
}).strict();

export const PersonUpdateInputSchema: z.ZodType<Prisma.PersonUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int()
}).strict();

export const PersonUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountCreateInputSchema: z.ZodType<Prisma.MonetaryAmountCreateInput> = z.object({
  value: z.number().optional(),
  currency: z.string().optional(),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutMonetaryAmountInputSchema)
}).strict();

export const MonetaryAmountUncheckedCreateInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  structuredValueId: z.number().int(),
  value: z.number().optional(),
  currency: z.string().optional()
}).strict();

export const MonetaryAmountUpdateInputSchema: z.ZodType<Prisma.MonetaryAmountUpdateInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneRequiredWithoutMonetaryAmountNestedInputSchema).optional()
}).strict();

export const MonetaryAmountUncheckedUpdateInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  structuredValueId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountCreateManyInputSchema: z.ZodType<Prisma.MonetaryAmountCreateManyInput> = z.object({
  id: z.number().int().optional(),
  structuredValueId: z.number().int(),
  value: z.number().optional(),
  currency: z.string().optional()
}).strict();

export const MonetaryAmountUpdateManyMutationInputSchema: z.ZodType<Prisma.MonetaryAmountUpdateManyMutationInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  structuredValueId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StatusEnumerationCreateInputSchema: z.ZodType<Prisma.StatusEnumerationCreateInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutStatusEnumerationInputSchema)
}).strict();

export const StatusEnumerationUncheckedCreateInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int()
}).strict();

export const StatusEnumerationUpdateInputSchema: z.ZodType<Prisma.StatusEnumerationUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutStatusEnumerationNestedInputSchema).optional()
}).strict();

export const StatusEnumerationUncheckedUpdateInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StatusEnumerationCreateManyInputSchema: z.ZodType<Prisma.StatusEnumerationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int()
}).strict();

export const StatusEnumerationUpdateManyMutationInputSchema: z.ZodType<Prisma.StatusEnumerationUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StatusEnumerationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const PersonNullableScalarRelationFilterSchema: z.ZodType<Prisma.PersonNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => PersonWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PersonWhereInputSchema).optional().nullable()
}).strict();

export const OrganizationNullableScalarRelationFilterSchema: z.ZodType<Prisma.OrganizationNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => OrganizationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OrganizationWhereInputSchema).optional().nullable()
}).strict();

export const IntangibleNullableScalarRelationFilterSchema: z.ZodType<Prisma.IntangibleNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => IntangibleWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => IntangibleWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ThingCountOrderByAggregateInputSchema: z.ZodType<Prisma.ThingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ThingAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ThingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingMinOrderByAggregateInputSchema: z.ZodType<Prisma.ThingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ThingSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const ThingScalarRelationFilterSchema: z.ZodType<Prisma.ThingScalarRelationFilter> = z.object({
  is: z.lazy(() => ThingWhereInputSchema).optional(),
  isNot: z.lazy(() => ThingWhereInputSchema).optional()
}).strict();

export const ServiceNullableScalarRelationFilterSchema: z.ZodType<Prisma.ServiceNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ServiceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ServiceWhereInputSchema).optional().nullable()
}).strict();

export const StructuredValueNullableScalarRelationFilterSchema: z.ZodType<Prisma.StructuredValueNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => StructuredValueWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StructuredValueWhereInputSchema).optional().nullable()
}).strict();

export const StatusEnumerationNullableScalarRelationFilterSchema: z.ZodType<Prisma.StatusEnumerationNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => StatusEnumerationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StatusEnumerationWhereInputSchema).optional().nullable()
}).strict();

export const IntangibleCountOrderByAggregateInputSchema: z.ZodType<Prisma.IntangibleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntangibleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IntangibleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntangibleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IntangibleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntangibleMinOrderByAggregateInputSchema: z.ZodType<Prisma.IntangibleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntangibleSumOrderByAggregateInputSchema: z.ZodType<Prisma.IntangibleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntangibleScalarRelationFilterSchema: z.ZodType<Prisma.IntangibleScalarRelationFilter> = z.object({
  is: z.lazy(() => IntangibleWhereInputSchema).optional(),
  isNot: z.lazy(() => IntangibleWhereInputSchema).optional()
}).strict();

export const MonetaryAmountNullableScalarRelationFilterSchema: z.ZodType<Prisma.MonetaryAmountNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => MonetaryAmountWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MonetaryAmountWhereInputSchema).optional().nullable()
}).strict();

export const ContactPointNullableScalarRelationFilterSchema: z.ZodType<Prisma.ContactPointNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ContactPointWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ContactPointWhereInputSchema).optional().nullable()
}).strict();

export const StructuredValueCountOrderByAggregateInputSchema: z.ZodType<Prisma.StructuredValueCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StructuredValueAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StructuredValueAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StructuredValueMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StructuredValueMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StructuredValueMinOrderByAggregateInputSchema: z.ZodType<Prisma.StructuredValueMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StructuredValueSumOrderByAggregateInputSchema: z.ZodType<Prisma.StructuredValueSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StructuredValueScalarRelationFilterSchema: z.ZodType<Prisma.StructuredValueScalarRelationFilter> = z.object({
  is: z.lazy(() => StructuredValueWhereInputSchema).optional(),
  isNot: z.lazy(() => StructuredValueWhereInputSchema).optional()
}).strict();

export const ContactPointCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContactPointCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telephone: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactPointAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContactPointAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactPointMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContactPointMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telephone: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactPointMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContactPointMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telephone: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactPointSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContactPointSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FinancialProductNullableScalarRelationFilterSchema: z.ZodType<Prisma.FinancialProductNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => FinancialProductWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FinancialProductWhereInputSchema).optional().nullable()
}).strict();

export const ServiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const ServiceScalarRelationFilterSchema: z.ZodType<Prisma.ServiceScalarRelationFilter> = z.object({
  is: z.lazy(() => ServiceWhereInputSchema).optional(),
  isNot: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const FinancialProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FinancialProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialProductAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FinancialProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FinancialProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FinancialProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialProductSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const GovernmentOrganizationNullableScalarRelationFilterSchema: z.ZodType<Prisma.GovernmentOrganizationNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => GovernmentOrganizationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GovernmentOrganizationWhereInputSchema).optional().nullable()
}).strict();

export const OrganizationCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizationScalarRelationFilterSchema: z.ZodType<Prisma.OrganizationScalarRelationFilter> = z.object({
  is: z.lazy(() => OrganizationWhereInputSchema).optional(),
  isNot: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const GovernmentOrganizationCountOrderByAggregateInputSchema: z.ZodType<Prisma.GovernmentOrganizationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GovernmentOrganizationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GovernmentOrganizationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GovernmentOrganizationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GovernmentOrganizationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GovernmentOrganizationMinOrderByAggregateInputSchema: z.ZodType<Prisma.GovernmentOrganizationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GovernmentOrganizationSumOrderByAggregateInputSchema: z.ZodType<Prisma.GovernmentOrganizationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PersonAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonSumOrderByAggregateInputSchema: z.ZodType<Prisma.PersonSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  thingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MonetaryAmountCountOrderByAggregateInputSchema: z.ZodType<Prisma.MonetaryAmountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MonetaryAmountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MonetaryAmountAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MonetaryAmountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MonetaryAmountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MonetaryAmountMinOrderByAggregateInputSchema: z.ZodType<Prisma.MonetaryAmountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MonetaryAmountSumOrderByAggregateInputSchema: z.ZodType<Prisma.MonetaryAmountSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  structuredValueId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StatusEnumerationCountOrderByAggregateInputSchema: z.ZodType<Prisma.StatusEnumerationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StatusEnumerationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StatusEnumerationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StatusEnumerationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StatusEnumerationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StatusEnumerationMinOrderByAggregateInputSchema: z.ZodType<Prisma.StatusEnumerationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StatusEnumerationSumOrderByAggregateInputSchema: z.ZodType<Prisma.StatusEnumerationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intangibleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const IntangibleCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.IntangibleCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional()
}).strict();

export const PersonUncheckedCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.PersonUncheckedCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const PersonUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => PersonUpdateWithoutThingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const OrganizationUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => OrganizationUpdateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const IntangibleUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.IntangibleUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => IntangibleUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntangibleUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => IntangibleUpdateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const PersonUncheckedUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => PersonUpdateWithoutThingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const OrganizationUncheckedUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => OrganizationUpdateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const IntangibleUncheckedUpdateOneWithoutThingNestedInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateOneWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => IntangibleUpsertWithoutThingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => IntangibleWhereInputSchema) ]).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntangibleUpdateToOneWithWhereWithoutThingInputSchema),z.lazy(() => IntangibleUpdateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const ThingCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional()
}).strict();

export const ServiceCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const StructuredValueCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional()
}).strict();

export const StatusEnumerationCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StatusEnumerationCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => StatusEnumerationWhereUniqueInputSchema).optional()
}).strict();

export const ServiceUncheckedCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const StructuredValueUncheckedCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUncheckedCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional()
}).strict();

export const StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInput> = z.object({
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StatusEnumerationCreateOrConnectWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => StatusEnumerationWhereUniqueInputSchema).optional()
}).strict();

export const ThingUpdateOneRequiredWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.ThingUpdateOneRequiredWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => ThingUpsertWithoutIntangibleInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ThingUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => ThingUpdateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const ServiceUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => ServiceUpdateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const StructuredValueUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.StructuredValueUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => StructuredValueUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StructuredValueUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUpdateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const StatusEnumerationUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.StatusEnumerationUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StatusEnumerationCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => StatusEnumerationUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StatusEnumerationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StatusEnumerationUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUpdateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const ServiceUncheckedUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => ServiceUpdateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => StructuredValueUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StructuredValueWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StructuredValueUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUpdateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInput> = z.object({
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StatusEnumerationCreateOrConnectWithoutIntangibleInputSchema).optional(),
  upsert: z.lazy(() => StatusEnumerationUpsertWithoutIntangibleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StatusEnumerationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StatusEnumerationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StatusEnumerationUpdateToOneWithWhereWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUpdateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedUpdateWithoutIntangibleInputSchema) ]).optional(),
}).strict();

export const IntangibleCreateNestedOneWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleCreateNestedOneWithoutStructuredValueInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional()
}).strict();

export const MonetaryAmountCreateNestedOneWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountCreateNestedOneWithoutStructuredValueInput> = z.object({
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MonetaryAmountCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => MonetaryAmountWhereUniqueInputSchema).optional()
}).strict();

export const ContactPointCreateNestedOneWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointCreateNestedOneWithoutStructuredValueInput> = z.object({
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContactPointCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => ContactPointWhereUniqueInputSchema).optional()
}).strict();

export const MonetaryAmountUncheckedCreateNestedOneWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedCreateNestedOneWithoutStructuredValueInput> = z.object({
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MonetaryAmountCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => MonetaryAmountWhereUniqueInputSchema).optional()
}).strict();

export const ContactPointUncheckedCreateNestedOneWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUncheckedCreateNestedOneWithoutStructuredValueInput> = z.object({
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContactPointCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => ContactPointWhereUniqueInputSchema).optional()
}).strict();

export const IntangibleUpdateOneRequiredWithoutStructuredValueNestedInputSchema: z.ZodType<Prisma.IntangibleUpdateOneRequiredWithoutStructuredValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  upsert: z.lazy(() => IntangibleUpsertWithoutStructuredValueInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntangibleUpdateToOneWithWhereWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUpdateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStructuredValueInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountUpdateOneWithoutStructuredValueNestedInputSchema: z.ZodType<Prisma.MonetaryAmountUpdateOneWithoutStructuredValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MonetaryAmountCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  upsert: z.lazy(() => MonetaryAmountUpsertWithoutStructuredValueInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MonetaryAmountWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MonetaryAmountUpdateToOneWithWhereWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUpdateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedUpdateWithoutStructuredValueInputSchema) ]).optional(),
}).strict();

export const ContactPointUpdateOneWithoutStructuredValueNestedInputSchema: z.ZodType<Prisma.ContactPointUpdateOneWithoutStructuredValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContactPointCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  upsert: z.lazy(() => ContactPointUpsertWithoutStructuredValueInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ContactPointWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ContactPointWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ContactPointWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ContactPointUpdateToOneWithWhereWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUpdateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedUpdateWithoutStructuredValueInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountUncheckedUpdateOneWithoutStructuredValueNestedInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedUpdateOneWithoutStructuredValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MonetaryAmountCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  upsert: z.lazy(() => MonetaryAmountUpsertWithoutStructuredValueInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MonetaryAmountWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MonetaryAmountWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MonetaryAmountUpdateToOneWithWhereWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUpdateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedUpdateWithoutStructuredValueInputSchema) ]).optional(),
}).strict();

export const ContactPointUncheckedUpdateOneWithoutStructuredValueNestedInputSchema: z.ZodType<Prisma.ContactPointUncheckedUpdateOneWithoutStructuredValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContactPointCreateOrConnectWithoutStructuredValueInputSchema).optional(),
  upsert: z.lazy(() => ContactPointUpsertWithoutStructuredValueInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ContactPointWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ContactPointWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ContactPointWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ContactPointUpdateToOneWithWhereWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUpdateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedUpdateWithoutStructuredValueInputSchema) ]).optional(),
}).strict();

export const StructuredValueCreateNestedOneWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueCreateNestedOneWithoutContactPointInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutContactPointInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutContactPointInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional()
}).strict();

export const StructuredValueUpdateOneRequiredWithoutContactPointNestedInputSchema: z.ZodType<Prisma.StructuredValueUpdateOneRequiredWithoutContactPointNestedInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutContactPointInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutContactPointInputSchema).optional(),
  upsert: z.lazy(() => StructuredValueUpsertWithoutContactPointInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StructuredValueUpdateToOneWithWhereWithoutContactPointInputSchema),z.lazy(() => StructuredValueUpdateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutContactPointInputSchema) ]).optional(),
}).strict();

export const IntangibleCreateNestedOneWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleCreateNestedOneWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional()
}).strict();

export const FinancialProductCreateNestedOneWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductCreateNestedOneWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialProductCreateOrConnectWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => FinancialProductWhereUniqueInputSchema).optional()
}).strict();

export const FinancialProductUncheckedCreateNestedOneWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUncheckedCreateNestedOneWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialProductCreateOrConnectWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => FinancialProductWhereUniqueInputSchema).optional()
}).strict();

export const IntangibleUpdateOneRequiredWithoutServiceNestedInputSchema: z.ZodType<Prisma.IntangibleUpdateOneRequiredWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutServiceInputSchema).optional(),
  upsert: z.lazy(() => IntangibleUpsertWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntangibleUpdateToOneWithWhereWithoutServiceInputSchema),z.lazy(() => IntangibleUpdateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutServiceInputSchema) ]).optional(),
}).strict();

export const FinancialProductUpdateOneWithoutServiceNestedInputSchema: z.ZodType<Prisma.FinancialProductUpdateOneWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialProductCreateOrConnectWithoutServiceInputSchema).optional(),
  upsert: z.lazy(() => FinancialProductUpsertWithoutServiceInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FinancialProductWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FinancialProductWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FinancialProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FinancialProductUpdateToOneWithWhereWithoutServiceInputSchema),z.lazy(() => FinancialProductUpdateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedUpdateWithoutServiceInputSchema) ]).optional(),
}).strict();

export const FinancialProductUncheckedUpdateOneWithoutServiceNestedInputSchema: z.ZodType<Prisma.FinancialProductUncheckedUpdateOneWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialProductCreateOrConnectWithoutServiceInputSchema).optional(),
  upsert: z.lazy(() => FinancialProductUpsertWithoutServiceInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FinancialProductWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FinancialProductWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FinancialProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FinancialProductUpdateToOneWithWhereWithoutServiceInputSchema),z.lazy(() => FinancialProductUpdateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedUpdateWithoutServiceInputSchema) ]).optional(),
}).strict();

export const ServiceCreateNestedOneWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutFinancialProductInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutFinancialProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutFinancialProductInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ServiceUpdateOneRequiredWithoutFinancialProductNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutFinancialProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutFinancialProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutFinancialProductInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutFinancialProductInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutFinancialProductInputSchema),z.lazy(() => ServiceUpdateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutFinancialProductInputSchema) ]).optional(),
}).strict();

export const ThingCreateNestedOneWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingCreateNestedOneWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional()
}).strict();

export const GovernmentOrganizationCreateNestedOneWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationCreateNestedOneWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GovernmentOrganizationCreateOrConnectWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => GovernmentOrganizationWhereUniqueInputSchema).optional()
}).strict();

export const GovernmentOrganizationUncheckedCreateNestedOneWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedCreateNestedOneWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GovernmentOrganizationCreateOrConnectWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => GovernmentOrganizationWhereUniqueInputSchema).optional()
}).strict();

export const ThingUpdateOneRequiredWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.ThingUpdateOneRequiredWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutOrganizationInputSchema).optional(),
  upsert: z.lazy(() => ThingUpsertWithoutOrganizationInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ThingUpdateToOneWithWhereWithoutOrganizationInputSchema),z.lazy(() => ThingUpdateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutOrganizationInputSchema) ]).optional(),
}).strict();

export const GovernmentOrganizationUpdateOneWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateOneWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GovernmentOrganizationCreateOrConnectWithoutOrganizationInputSchema).optional(),
  upsert: z.lazy(() => GovernmentOrganizationUpsertWithoutOrganizationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GovernmentOrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GovernmentOrganizationUpdateToOneWithWhereWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]).optional(),
}).strict();

export const GovernmentOrganizationUncheckedUpdateOneWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedUpdateOneWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GovernmentOrganizationCreateOrConnectWithoutOrganizationInputSchema).optional(),
  upsert: z.lazy(() => GovernmentOrganizationUpsertWithoutOrganizationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GovernmentOrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GovernmentOrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GovernmentOrganizationUpdateToOneWithWhereWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]).optional(),
}).strict();

export const OrganizationCreateNestedOneWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutGovernmentOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutGovernmentOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutGovernmentOrganizationInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export const OrganizationUpdateOneRequiredWithoutGovernmentOrganizationNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutGovernmentOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutGovernmentOrganizationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutGovernmentOrganizationInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutGovernmentOrganizationInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUpdateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutGovernmentOrganizationInputSchema) ]).optional(),
}).strict();

export const ThingCreateNestedOneWithoutPersonInputSchema: z.ZodType<Prisma.ThingCreateNestedOneWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutPersonInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional()
}).strict();

export const ThingUpdateOneRequiredWithoutPersonNestedInputSchema: z.ZodType<Prisma.ThingUpdateOneRequiredWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ThingCreateOrConnectWithoutPersonInputSchema).optional(),
  upsert: z.lazy(() => ThingUpsertWithoutPersonInputSchema).optional(),
  connect: z.lazy(() => ThingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ThingUpdateToOneWithWhereWithoutPersonInputSchema),z.lazy(() => ThingUpdateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutPersonInputSchema) ]).optional(),
}).strict();

export const StructuredValueCreateNestedOneWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueCreateNestedOneWithoutMonetaryAmountInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutMonetaryAmountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutMonetaryAmountInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional()
}).strict();

export const StructuredValueUpdateOneRequiredWithoutMonetaryAmountNestedInputSchema: z.ZodType<Prisma.StructuredValueUpdateOneRequiredWithoutMonetaryAmountNestedInput> = z.object({
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutMonetaryAmountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StructuredValueCreateOrConnectWithoutMonetaryAmountInputSchema).optional(),
  upsert: z.lazy(() => StructuredValueUpsertWithoutMonetaryAmountInputSchema).optional(),
  connect: z.lazy(() => StructuredValueWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StructuredValueUpdateToOneWithWhereWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUpdateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutMonetaryAmountInputSchema) ]).optional(),
}).strict();

export const IntangibleCreateNestedOneWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleCreateNestedOneWithoutStatusEnumerationInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStatusEnumerationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutStatusEnumerationInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional()
}).strict();

export const IntangibleUpdateOneRequiredWithoutStatusEnumerationNestedInputSchema: z.ZodType<Prisma.IntangibleUpdateOneRequiredWithoutStatusEnumerationNestedInput> = z.object({
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStatusEnumerationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IntangibleCreateOrConnectWithoutStatusEnumerationInputSchema).optional(),
  upsert: z.lazy(() => IntangibleUpsertWithoutStatusEnumerationInputSchema).optional(),
  connect: z.lazy(() => IntangibleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IntangibleUpdateToOneWithWhereWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUpdateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStatusEnumerationInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const PersonCreateWithoutThingInputSchema: z.ZodType<Prisma.PersonCreateWithoutThingInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const PersonUncheckedCreateWithoutThingInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutThingInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const PersonCreateOrConnectWithoutThingInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutThingInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]),
}).strict();

export const OrganizationCreateWithoutThingInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutThingInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationCreateNestedOneWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationUncheckedCreateWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutThingInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUncheckedCreateNestedOneWithoutOrganizationInputSchema).optional()
}).strict();

export const OrganizationCreateOrConnectWithoutThingInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutThingInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]),
}).strict();

export const IntangibleCreateWithoutThingInputSchema: z.ZodType<Prisma.IntangibleCreateWithoutThingInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateWithoutThingInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  service: z.lazy(() => ServiceUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleCreateOrConnectWithoutThingInputSchema: z.ZodType<Prisma.IntangibleCreateOrConnectWithoutThingInput> = z.object({
  where: z.lazy(() => IntangibleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]),
}).strict();

export const PersonUpsertWithoutThingInputSchema: z.ZodType<Prisma.PersonUpsertWithoutThingInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutThingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutThingInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutThingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutThingInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export const PersonUpdateToOneWithWhereWithoutThingInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutThingInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutThingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutThingInputSchema) ]),
}).strict();

export const PersonUpdateWithoutThingInputSchema: z.ZodType<Prisma.PersonUpdateWithoutThingInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PersonUncheckedUpdateWithoutThingInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutThingInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationUpsertWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutThingInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutThingInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutThingInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutThingInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutThingInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutThingInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutThingInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUpdateOneWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutThingInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutThingInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  governmentOrganization: z.lazy(() => GovernmentOrganizationUncheckedUpdateOneWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const IntangibleUpsertWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUpsertWithoutThingInput> = z.object({
  update: z.union([ z.lazy(() => IntangibleUpdateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutThingInputSchema) ]),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutThingInputSchema) ]),
  where: z.lazy(() => IntangibleWhereInputSchema).optional()
}).strict();

export const IntangibleUpdateToOneWithWhereWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUpdateToOneWithWhereWithoutThingInput> = z.object({
  where: z.lazy(() => IntangibleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IntangibleUpdateWithoutThingInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutThingInputSchema) ]),
}).strict();

export const IntangibleUpdateWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUpdateWithoutThingInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  service: z.lazy(() => ServiceUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleUncheckedUpdateWithoutThingInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateWithoutThingInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  service: z.lazy(() => ServiceUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const ThingCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingCreateWithoutIntangibleInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutThingInputSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingUncheckedCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingUncheckedCreateWithoutIntangibleInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonUncheckedCreateNestedOneWithoutThingInputSchema).optional(),
  organization: z.lazy(() => OrganizationUncheckedCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingCreateOrConnectWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingCreateOrConnectWithoutIntangibleInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThingCreateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedCreateWithoutIntangibleInputSchema) ]),
}).strict();

export const ServiceCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceCreateWithoutIntangibleInput> = z.object({
  financialProduct: z.lazy(() => FinancialProductCreateNestedOneWithoutServiceInputSchema).optional()
}).strict();

export const ServiceUncheckedCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutIntangibleInput> = z.object({
  id: z.number().int().optional(),
  financialProduct: z.lazy(() => FinancialProductUncheckedCreateNestedOneWithoutServiceInputSchema).optional()
}).strict();

export const ServiceCreateOrConnectWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutIntangibleInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]),
}).strict();

export const StructuredValueCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueCreateWithoutIntangibleInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  monetaryAmount: z.lazy(() => MonetaryAmountCreateNestedOneWithoutStructuredValueInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueUncheckedCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUncheckedCreateWithoutIntangibleInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueCreateOrConnectWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueCreateOrConnectWithoutIntangibleInput> = z.object({
  where: z.lazy(() => StructuredValueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]),
}).strict();

export const StatusEnumerationCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationCreateWithoutIntangibleInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedCreateWithoutIntangibleInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const StatusEnumerationCreateOrConnectWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationCreateOrConnectWithoutIntangibleInput> = z.object({
  where: z.lazy(() => StatusEnumerationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]),
}).strict();

export const ThingUpsertWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingUpsertWithoutIntangibleInput> = z.object({
  update: z.union([ z.lazy(() => ThingUpdateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutIntangibleInputSchema) ]),
  create: z.union([ z.lazy(() => ThingCreateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedCreateWithoutIntangibleInputSchema) ]),
  where: z.lazy(() => ThingWhereInputSchema).optional()
}).strict();

export const ThingUpdateToOneWithWhereWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingUpdateToOneWithWhereWithoutIntangibleInput> = z.object({
  where: z.lazy(() => ThingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ThingUpdateWithoutIntangibleInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutIntangibleInputSchema) ]),
}).strict();

export const ThingUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingUpdateWithoutIntangibleInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneWithoutThingNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingUncheckedUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateWithoutIntangibleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUncheckedUpdateOneWithoutThingNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUncheckedUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ServiceUpsertWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutIntangibleInput> = z.object({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutIntangibleInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutIntangibleInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const ServiceUpdateToOneWithWhereWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutIntangibleInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutIntangibleInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutIntangibleInputSchema) ]),
}).strict();

export const ServiceUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutIntangibleInput> = z.object({
  financialProduct: z.lazy(() => FinancialProductUpdateOneWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutIntangibleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  financialProduct: z.lazy(() => FinancialProductUncheckedUpdateOneWithoutServiceNestedInputSchema).optional()
}).strict();

export const StructuredValueUpsertWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUpsertWithoutIntangibleInput> = z.object({
  update: z.union([ z.lazy(() => StructuredValueUpdateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutIntangibleInputSchema) ]),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutIntangibleInputSchema) ]),
  where: z.lazy(() => StructuredValueWhereInputSchema).optional()
}).strict();

export const StructuredValueUpdateToOneWithWhereWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUpdateToOneWithWhereWithoutIntangibleInput> = z.object({
  where: z.lazy(() => StructuredValueWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StructuredValueUpdateWithoutIntangibleInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutIntangibleInputSchema) ]),
}).strict();

export const StructuredValueUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUpdateWithoutIntangibleInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monetaryAmount: z.lazy(() => MonetaryAmountUpdateOneWithoutStructuredValueNestedInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StructuredValueUncheckedUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateWithoutIntangibleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StatusEnumerationUpsertWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUpsertWithoutIntangibleInput> = z.object({
  update: z.union([ z.lazy(() => StatusEnumerationUpdateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedUpdateWithoutIntangibleInputSchema) ]),
  create: z.union([ z.lazy(() => StatusEnumerationCreateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedCreateWithoutIntangibleInputSchema) ]),
  where: z.lazy(() => StatusEnumerationWhereInputSchema).optional()
}).strict();

export const StatusEnumerationUpdateToOneWithWhereWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUpdateToOneWithWhereWithoutIntangibleInput> = z.object({
  where: z.lazy(() => StatusEnumerationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StatusEnumerationUpdateWithoutIntangibleInputSchema),z.lazy(() => StatusEnumerationUncheckedUpdateWithoutIntangibleInputSchema) ]),
}).strict();

export const StatusEnumerationUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUpdateWithoutIntangibleInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StatusEnumerationUncheckedUpdateWithoutIntangibleInputSchema: z.ZodType<Prisma.StatusEnumerationUncheckedUpdateWithoutIntangibleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntangibleCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleCreateWithoutStructuredValueInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutIntangibleInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateWithoutStructuredValueInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int(),
  service: z.lazy(() => ServiceUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleCreateOrConnectWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleCreateOrConnectWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => IntangibleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStructuredValueInputSchema) ]),
}).strict();

export const MonetaryAmountCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountCreateWithoutStructuredValueInput> = z.object({
  value: z.number().optional(),
  currency: z.string().optional()
}).strict();

export const MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedCreateWithoutStructuredValueInput> = z.object({
  id: z.number().int().optional(),
  value: z.number().optional(),
  currency: z.string().optional()
}).strict();

export const MonetaryAmountCreateOrConnectWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountCreateOrConnectWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => MonetaryAmountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]),
}).strict();

export const ContactPointCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointCreateWithoutStructuredValueInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string().optional().nullable()
}).strict();

export const ContactPointUncheckedCreateWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUncheckedCreateWithoutStructuredValueInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string().optional().nullable()
}).strict();

export const ContactPointCreateOrConnectWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointCreateOrConnectWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => ContactPointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]),
}).strict();

export const IntangibleUpsertWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleUpsertWithoutStructuredValueInput> = z.object({
  update: z.union([ z.lazy(() => IntangibleUpdateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStructuredValueInputSchema) ]),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStructuredValueInputSchema) ]),
  where: z.lazy(() => IntangibleWhereInputSchema).optional()
}).strict();

export const IntangibleUpdateToOneWithWhereWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleUpdateToOneWithWhereWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => IntangibleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IntangibleUpdateWithoutStructuredValueInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStructuredValueInputSchema) ]),
}).strict();

export const IntangibleUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleUpdateWithoutStructuredValueInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutIntangibleNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleUncheckedUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateWithoutStructuredValueInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const MonetaryAmountUpsertWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUpsertWithoutStructuredValueInput> = z.object({
  update: z.union([ z.lazy(() => MonetaryAmountUpdateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedUpdateWithoutStructuredValueInputSchema) ]),
  create: z.union([ z.lazy(() => MonetaryAmountCreateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedCreateWithoutStructuredValueInputSchema) ]),
  where: z.lazy(() => MonetaryAmountWhereInputSchema).optional()
}).strict();

export const MonetaryAmountUpdateToOneWithWhereWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUpdateToOneWithWhereWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => MonetaryAmountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MonetaryAmountUpdateWithoutStructuredValueInputSchema),z.lazy(() => MonetaryAmountUncheckedUpdateWithoutStructuredValueInputSchema) ]),
}).strict();

export const MonetaryAmountUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUpdateWithoutStructuredValueInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MonetaryAmountUncheckedUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.MonetaryAmountUncheckedUpdateWithoutStructuredValueInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactPointUpsertWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUpsertWithoutStructuredValueInput> = z.object({
  update: z.union([ z.lazy(() => ContactPointUpdateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedUpdateWithoutStructuredValueInputSchema) ]),
  create: z.union([ z.lazy(() => ContactPointCreateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedCreateWithoutStructuredValueInputSchema) ]),
  where: z.lazy(() => ContactPointWhereInputSchema).optional()
}).strict();

export const ContactPointUpdateToOneWithWhereWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUpdateToOneWithWhereWithoutStructuredValueInput> = z.object({
  where: z.lazy(() => ContactPointWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContactPointUpdateWithoutStructuredValueInputSchema),z.lazy(() => ContactPointUncheckedUpdateWithoutStructuredValueInputSchema) ]),
}).strict();

export const ContactPointUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUpdateWithoutStructuredValueInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContactPointUncheckedUpdateWithoutStructuredValueInputSchema: z.ZodType<Prisma.ContactPointUncheckedUpdateWithoutStructuredValueInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  telephone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StructuredValueCreateWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueCreateWithoutContactPointInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutStructuredValueInputSchema),
  monetaryAmount: z.lazy(() => MonetaryAmountCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueUncheckedCreateWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueUncheckedCreateWithoutContactPointInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueCreateOrConnectWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueCreateOrConnectWithoutContactPointInput> = z.object({
  where: z.lazy(() => StructuredValueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutContactPointInputSchema) ]),
}).strict();

export const StructuredValueUpsertWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueUpsertWithoutContactPointInput> = z.object({
  update: z.union([ z.lazy(() => StructuredValueUpdateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutContactPointInputSchema) ]),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutContactPointInputSchema) ]),
  where: z.lazy(() => StructuredValueWhereInputSchema).optional()
}).strict();

export const StructuredValueUpdateToOneWithWhereWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueUpdateToOneWithWhereWithoutContactPointInput> = z.object({
  where: z.lazy(() => StructuredValueWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StructuredValueUpdateWithoutContactPointInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutContactPointInputSchema) ]),
}).strict();

export const StructuredValueUpdateWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueUpdateWithoutContactPointInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutStructuredValueNestedInputSchema).optional(),
  monetaryAmount: z.lazy(() => MonetaryAmountUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StructuredValueUncheckedUpdateWithoutContactPointInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateWithoutContactPointInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  monetaryAmount: z.lazy(() => MonetaryAmountUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const IntangibleCreateWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleCreateWithoutServiceInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutIntangibleInputSchema),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateWithoutServiceInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int(),
  structuredValue: z.lazy(() => StructuredValueUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => IntangibleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const FinancialProductCreateWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductCreateWithoutServiceInput> = z.object({
  label: z.string(),
  interestRate: z.number()
}).strict();

export const FinancialProductUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUncheckedCreateWithoutServiceInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  interestRate: z.number()
}).strict();

export const FinancialProductCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => FinancialProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const IntangibleUpsertWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleUpsertWithoutServiceInput> = z.object({
  update: z.union([ z.lazy(() => IntangibleUpdateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutServiceInputSchema) ]),
  where: z.lazy(() => IntangibleWhereInputSchema).optional()
}).strict();

export const IntangibleUpdateToOneWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleUpdateToOneWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => IntangibleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IntangibleUpdateWithoutServiceInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict();

export const IntangibleUpdateWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleUpdateWithoutServiceInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleUncheckedUpdateWithoutServiceInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateWithoutServiceInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  statusEnumeration: z.lazy(() => StatusEnumerationUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const FinancialProductUpsertWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUpsertWithoutServiceInput> = z.object({
  update: z.union([ z.lazy(() => FinancialProductUpdateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => FinancialProductCreateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedCreateWithoutServiceInputSchema) ]),
  where: z.lazy(() => FinancialProductWhereInputSchema).optional()
}).strict();

export const FinancialProductUpdateToOneWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUpdateToOneWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => FinancialProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FinancialProductUpdateWithoutServiceInputSchema),z.lazy(() => FinancialProductUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict();

export const FinancialProductUpdateWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUpdateWithoutServiceInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FinancialProductUncheckedUpdateWithoutServiceInputSchema: z.ZodType<Prisma.FinancialProductUncheckedUpdateWithoutServiceInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  interestRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceCreateWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceCreateWithoutFinancialProductInput> = z.object({
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutServiceInputSchema)
}).strict();

export const ServiceUncheckedCreateWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutFinancialProductInput> = z.object({
  id: z.number().int().optional(),
  intangibleId: z.number().int()
}).strict();

export const ServiceCreateOrConnectWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutFinancialProductInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutFinancialProductInputSchema) ]),
}).strict();

export const ServiceUpsertWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutFinancialProductInput> = z.object({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutFinancialProductInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutFinancialProductInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const ServiceUpdateToOneWithWhereWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutFinancialProductInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutFinancialProductInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutFinancialProductInputSchema) ]),
}).strict();

export const ServiceUpdateWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutFinancialProductInput> = z.object({
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutFinancialProductInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutFinancialProductInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingCreateWithoutOrganizationInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  person: z.lazy(() => PersonUncheckedCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThingCreateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const GovernmentOrganizationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationCreateWithoutOrganizationInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable()
}).strict();

export const GovernmentOrganizationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => GovernmentOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export const ThingUpsertWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingUpsertWithoutOrganizationInput> = z.object({
  update: z.union([ z.lazy(() => ThingUpdateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => ThingCreateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedCreateWithoutOrganizationInputSchema) ]),
  where: z.lazy(() => ThingWhereInputSchema).optional()
}).strict();

export const ThingUpdateToOneWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingUpdateToOneWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ThingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ThingUpdateWithoutOrganizationInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const ThingUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingUpdateWithoutOrganizationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateWithoutOrganizationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUncheckedUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const GovernmentOrganizationUpsertWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpsertWithoutOrganizationInput> = z.object({
  update: z.union([ z.lazy(() => GovernmentOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => GovernmentOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
  where: z.lazy(() => GovernmentOrganizationWhereInputSchema).optional()
}).strict();

export const GovernmentOrganizationUpdateToOneWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateToOneWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => GovernmentOrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GovernmentOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => GovernmentOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export const GovernmentOrganizationUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateWithoutOrganizationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GovernmentOrganizationUncheckedUpdateWithoutOrganizationInputSchema: z.ZodType<Prisma.GovernmentOrganizationUncheckedUpdateWithoutOrganizationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrganizationCreateWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutGovernmentOrganizationInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutOrganizationInputSchema)
}).strict();

export const OrganizationUncheckedCreateWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutGovernmentOrganizationInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int()
}).strict();

export const OrganizationCreateOrConnectWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutGovernmentOrganizationInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutGovernmentOrganizationInputSchema) ]),
}).strict();

export const OrganizationUpsertWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutGovernmentOrganizationInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutGovernmentOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutGovernmentOrganizationInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export const OrganizationUpdateToOneWithWhereWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutGovernmentOrganizationInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutGovernmentOrganizationInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutGovernmentOrganizationInputSchema) ]),
}).strict();

export const OrganizationUpdateWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationUpdateWithoutGovernmentOrganizationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutOrganizationNestedInputSchema).optional()
}).strict();

export const OrganizationUncheckedUpdateWithoutGovernmentOrganizationInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutGovernmentOrganizationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingCreateWithoutPersonInputSchema: z.ZodType<Prisma.ThingCreateWithoutPersonInput> = z.object({
  label: z.string(),
  comment: z.string().optional().nullable(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.ThingUncheckedCreateWithoutPersonInput> = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  comment: z.string().optional().nullable(),
  organization: z.lazy(() => OrganizationUncheckedCreateNestedOneWithoutThingInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedCreateNestedOneWithoutThingInputSchema).optional()
}).strict();

export const ThingCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.ThingCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThingCreateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const ThingUpsertWithoutPersonInputSchema: z.ZodType<Prisma.ThingUpsertWithoutPersonInput> = z.object({
  update: z.union([ z.lazy(() => ThingUpdateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => ThingCreateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedCreateWithoutPersonInputSchema) ]),
  where: z.lazy(() => ThingWhereInputSchema).optional()
}).strict();

export const ThingUpdateToOneWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.ThingUpdateToOneWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => ThingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ThingUpdateWithoutPersonInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export const ThingUpdateWithoutPersonInputSchema: z.ZodType<Prisma.ThingUpdateWithoutPersonInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateWithoutPersonInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organization: z.lazy(() => OrganizationUncheckedUpdateOneWithoutThingNestedInputSchema).optional(),
  intangible: z.lazy(() => IntangibleUncheckedUpdateOneWithoutThingNestedInputSchema).optional()
}).strict();

export const StructuredValueCreateWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueCreateWithoutMonetaryAmountInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangible: z.lazy(() => IntangibleCreateNestedOneWithoutStructuredValueInputSchema),
  contactPoint: z.lazy(() => ContactPointCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueUncheckedCreateWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueUncheckedCreateWithoutMonetaryAmountInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  intangibleId: z.number().int(),
  contactPoint: z.lazy(() => ContactPointUncheckedCreateNestedOneWithoutStructuredValueInputSchema).optional()
}).strict();

export const StructuredValueCreateOrConnectWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueCreateOrConnectWithoutMonetaryAmountInput> = z.object({
  where: z.lazy(() => StructuredValueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutMonetaryAmountInputSchema) ]),
}).strict();

export const StructuredValueUpsertWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueUpsertWithoutMonetaryAmountInput> = z.object({
  update: z.union([ z.lazy(() => StructuredValueUpdateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutMonetaryAmountInputSchema) ]),
  create: z.union([ z.lazy(() => StructuredValueCreateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedCreateWithoutMonetaryAmountInputSchema) ]),
  where: z.lazy(() => StructuredValueWhereInputSchema).optional()
}).strict();

export const StructuredValueUpdateToOneWithWhereWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueUpdateToOneWithWhereWithoutMonetaryAmountInput> = z.object({
  where: z.lazy(() => StructuredValueWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StructuredValueUpdateWithoutMonetaryAmountInputSchema),z.lazy(() => StructuredValueUncheckedUpdateWithoutMonetaryAmountInputSchema) ]),
}).strict();

export const StructuredValueUpdateWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueUpdateWithoutMonetaryAmountInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangible: z.lazy(() => IntangibleUpdateOneRequiredWithoutStructuredValueNestedInputSchema).optional(),
  contactPoint: z.lazy(() => ContactPointUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const StructuredValueUncheckedUpdateWithoutMonetaryAmountInputSchema: z.ZodType<Prisma.StructuredValueUncheckedUpdateWithoutMonetaryAmountInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intangibleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  contactPoint: z.lazy(() => ContactPointUncheckedUpdateOneWithoutStructuredValueNestedInputSchema).optional()
}).strict();

export const IntangibleCreateWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleCreateWithoutStatusEnumerationInput> = z.object({
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thing: z.lazy(() => ThingCreateNestedOneWithoutIntangibleInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleUncheckedCreateWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleUncheckedCreateWithoutStatusEnumerationInput> = z.object({
  id: z.number().int().optional(),
  label: z.string().optional().nullable(),
  comment: z.string().optional().nullable(),
  thingId: z.number().int(),
  service: z.lazy(() => ServiceUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedCreateNestedOneWithoutIntangibleInputSchema).optional()
}).strict();

export const IntangibleCreateOrConnectWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleCreateOrConnectWithoutStatusEnumerationInput> = z.object({
  where: z.lazy(() => IntangibleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStatusEnumerationInputSchema) ]),
}).strict();

export const IntangibleUpsertWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleUpsertWithoutStatusEnumerationInput> = z.object({
  update: z.union([ z.lazy(() => IntangibleUpdateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStatusEnumerationInputSchema) ]),
  create: z.union([ z.lazy(() => IntangibleCreateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedCreateWithoutStatusEnumerationInputSchema) ]),
  where: z.lazy(() => IntangibleWhereInputSchema).optional()
}).strict();

export const IntangibleUpdateToOneWithWhereWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleUpdateToOneWithWhereWithoutStatusEnumerationInput> = z.object({
  where: z.lazy(() => IntangibleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IntangibleUpdateWithoutStatusEnumerationInputSchema),z.lazy(() => IntangibleUncheckedUpdateWithoutStatusEnumerationInputSchema) ]),
}).strict();

export const IntangibleUpdateWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleUpdateWithoutStatusEnumerationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thing: z.lazy(() => ThingUpdateOneRequiredWithoutIntangibleNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

export const IntangibleUncheckedUpdateWithoutStatusEnumerationInputSchema: z.ZodType<Prisma.IntangibleUncheckedUpdateWithoutStatusEnumerationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thingId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional(),
  structuredValue: z.lazy(() => StructuredValueUncheckedUpdateOneWithoutIntangibleNestedInputSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ThingFindFirstArgsSchema: z.ZodType<Prisma.ThingFindFirstArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThingScalarFieldEnumSchema,ThingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ThingFindFirstOrThrowArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThingScalarFieldEnumSchema,ThingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThingFindManyArgsSchema: z.ZodType<Prisma.ThingFindManyArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThingScalarFieldEnumSchema,ThingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThingAggregateArgsSchema: z.ZodType<Prisma.ThingAggregateArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThingGroupByArgsSchema: z.ZodType<Prisma.ThingGroupByArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithAggregationInputSchema.array(),ThingOrderByWithAggregationInputSchema ]).optional(),
  by: ThingScalarFieldEnumSchema.array(),
  having: ThingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThingFindUniqueArgsSchema: z.ZodType<Prisma.ThingFindUniqueArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() ;

export const ThingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ThingFindUniqueOrThrowArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() ;

export const IntangibleFindFirstArgsSchema: z.ZodType<Prisma.IntangibleFindFirstArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereInputSchema.optional(),
  orderBy: z.union([ IntangibleOrderByWithRelationInputSchema.array(),IntangibleOrderByWithRelationInputSchema ]).optional(),
  cursor: IntangibleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntangibleScalarFieldEnumSchema,IntangibleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IntangibleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.IntangibleFindFirstOrThrowArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereInputSchema.optional(),
  orderBy: z.union([ IntangibleOrderByWithRelationInputSchema.array(),IntangibleOrderByWithRelationInputSchema ]).optional(),
  cursor: IntangibleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntangibleScalarFieldEnumSchema,IntangibleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IntangibleFindManyArgsSchema: z.ZodType<Prisma.IntangibleFindManyArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereInputSchema.optional(),
  orderBy: z.union([ IntangibleOrderByWithRelationInputSchema.array(),IntangibleOrderByWithRelationInputSchema ]).optional(),
  cursor: IntangibleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntangibleScalarFieldEnumSchema,IntangibleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IntangibleAggregateArgsSchema: z.ZodType<Prisma.IntangibleAggregateArgs> = z.object({
  where: IntangibleWhereInputSchema.optional(),
  orderBy: z.union([ IntangibleOrderByWithRelationInputSchema.array(),IntangibleOrderByWithRelationInputSchema ]).optional(),
  cursor: IntangibleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const IntangibleGroupByArgsSchema: z.ZodType<Prisma.IntangibleGroupByArgs> = z.object({
  where: IntangibleWhereInputSchema.optional(),
  orderBy: z.union([ IntangibleOrderByWithAggregationInputSchema.array(),IntangibleOrderByWithAggregationInputSchema ]).optional(),
  by: IntangibleScalarFieldEnumSchema.array(),
  having: IntangibleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const IntangibleFindUniqueArgsSchema: z.ZodType<Prisma.IntangibleFindUniqueArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereUniqueInputSchema,
}).strict() ;

export const IntangibleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.IntangibleFindUniqueOrThrowArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereUniqueInputSchema,
}).strict() ;

export const StructuredValueFindFirstArgsSchema: z.ZodType<Prisma.StructuredValueFindFirstArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereInputSchema.optional(),
  orderBy: z.union([ StructuredValueOrderByWithRelationInputSchema.array(),StructuredValueOrderByWithRelationInputSchema ]).optional(),
  cursor: StructuredValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StructuredValueScalarFieldEnumSchema,StructuredValueScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StructuredValueFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StructuredValueFindFirstOrThrowArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereInputSchema.optional(),
  orderBy: z.union([ StructuredValueOrderByWithRelationInputSchema.array(),StructuredValueOrderByWithRelationInputSchema ]).optional(),
  cursor: StructuredValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StructuredValueScalarFieldEnumSchema,StructuredValueScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StructuredValueFindManyArgsSchema: z.ZodType<Prisma.StructuredValueFindManyArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereInputSchema.optional(),
  orderBy: z.union([ StructuredValueOrderByWithRelationInputSchema.array(),StructuredValueOrderByWithRelationInputSchema ]).optional(),
  cursor: StructuredValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StructuredValueScalarFieldEnumSchema,StructuredValueScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StructuredValueAggregateArgsSchema: z.ZodType<Prisma.StructuredValueAggregateArgs> = z.object({
  where: StructuredValueWhereInputSchema.optional(),
  orderBy: z.union([ StructuredValueOrderByWithRelationInputSchema.array(),StructuredValueOrderByWithRelationInputSchema ]).optional(),
  cursor: StructuredValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StructuredValueGroupByArgsSchema: z.ZodType<Prisma.StructuredValueGroupByArgs> = z.object({
  where: StructuredValueWhereInputSchema.optional(),
  orderBy: z.union([ StructuredValueOrderByWithAggregationInputSchema.array(),StructuredValueOrderByWithAggregationInputSchema ]).optional(),
  by: StructuredValueScalarFieldEnumSchema.array(),
  having: StructuredValueScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StructuredValueFindUniqueArgsSchema: z.ZodType<Prisma.StructuredValueFindUniqueArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereUniqueInputSchema,
}).strict() ;

export const StructuredValueFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StructuredValueFindUniqueOrThrowArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereUniqueInputSchema,
}).strict() ;

export const ContactPointFindFirstArgsSchema: z.ZodType<Prisma.ContactPointFindFirstArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereInputSchema.optional(),
  orderBy: z.union([ ContactPointOrderByWithRelationInputSchema.array(),ContactPointOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactPointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactPointScalarFieldEnumSchema,ContactPointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactPointFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContactPointFindFirstOrThrowArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereInputSchema.optional(),
  orderBy: z.union([ ContactPointOrderByWithRelationInputSchema.array(),ContactPointOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactPointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactPointScalarFieldEnumSchema,ContactPointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactPointFindManyArgsSchema: z.ZodType<Prisma.ContactPointFindManyArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereInputSchema.optional(),
  orderBy: z.union([ ContactPointOrderByWithRelationInputSchema.array(),ContactPointOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactPointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactPointScalarFieldEnumSchema,ContactPointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactPointAggregateArgsSchema: z.ZodType<Prisma.ContactPointAggregateArgs> = z.object({
  where: ContactPointWhereInputSchema.optional(),
  orderBy: z.union([ ContactPointOrderByWithRelationInputSchema.array(),ContactPointOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactPointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ContactPointGroupByArgsSchema: z.ZodType<Prisma.ContactPointGroupByArgs> = z.object({
  where: ContactPointWhereInputSchema.optional(),
  orderBy: z.union([ ContactPointOrderByWithAggregationInputSchema.array(),ContactPointOrderByWithAggregationInputSchema ]).optional(),
  by: ContactPointScalarFieldEnumSchema.array(),
  having: ContactPointScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ContactPointFindUniqueArgsSchema: z.ZodType<Prisma.ContactPointFindUniqueArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereUniqueInputSchema,
}).strict() ;

export const ContactPointFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContactPointFindUniqueOrThrowArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereUniqueInputSchema,
}).strict() ;

export const ServiceFindFirstArgsSchema: z.ZodType<Prisma.ServiceFindFirstArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServiceFindFirstOrThrowArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceFindManyArgsSchema: z.ZodType<Prisma.ServiceFindManyArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceAggregateArgsSchema: z.ZodType<Prisma.ServiceAggregateArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceGroupByArgsSchema: z.ZodType<Prisma.ServiceGroupByArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithAggregationInputSchema.array(),ServiceOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceScalarFieldEnumSchema.array(),
  having: ServiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceFindUniqueArgsSchema: z.ZodType<Prisma.ServiceFindUniqueArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const FinancialProductFindFirstArgsSchema: z.ZodType<Prisma.FinancialProductFindFirstArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereInputSchema.optional(),
  orderBy: z.union([ FinancialProductOrderByWithRelationInputSchema.array(),FinancialProductOrderByWithRelationInputSchema ]).optional(),
  cursor: FinancialProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FinancialProductScalarFieldEnumSchema,FinancialProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FinancialProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FinancialProductFindFirstOrThrowArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereInputSchema.optional(),
  orderBy: z.union([ FinancialProductOrderByWithRelationInputSchema.array(),FinancialProductOrderByWithRelationInputSchema ]).optional(),
  cursor: FinancialProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FinancialProductScalarFieldEnumSchema,FinancialProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FinancialProductFindManyArgsSchema: z.ZodType<Prisma.FinancialProductFindManyArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereInputSchema.optional(),
  orderBy: z.union([ FinancialProductOrderByWithRelationInputSchema.array(),FinancialProductOrderByWithRelationInputSchema ]).optional(),
  cursor: FinancialProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FinancialProductScalarFieldEnumSchema,FinancialProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FinancialProductAggregateArgsSchema: z.ZodType<Prisma.FinancialProductAggregateArgs> = z.object({
  where: FinancialProductWhereInputSchema.optional(),
  orderBy: z.union([ FinancialProductOrderByWithRelationInputSchema.array(),FinancialProductOrderByWithRelationInputSchema ]).optional(),
  cursor: FinancialProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FinancialProductGroupByArgsSchema: z.ZodType<Prisma.FinancialProductGroupByArgs> = z.object({
  where: FinancialProductWhereInputSchema.optional(),
  orderBy: z.union([ FinancialProductOrderByWithAggregationInputSchema.array(),FinancialProductOrderByWithAggregationInputSchema ]).optional(),
  by: FinancialProductScalarFieldEnumSchema.array(),
  having: FinancialProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FinancialProductFindUniqueArgsSchema: z.ZodType<Prisma.FinancialProductFindUniqueArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereUniqueInputSchema,
}).strict() ;

export const FinancialProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FinancialProductFindUniqueOrThrowArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereUniqueInputSchema,
}).strict() ;

export const OrganizationFindFirstArgsSchema: z.ZodType<Prisma.OrganizationFindFirstArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFindFirstOrThrowArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationFindManyArgsSchema: z.ZodType<Prisma.OrganizationFindManyArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrganizationAggregateArgsSchema: z.ZodType<Prisma.OrganizationAggregateArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrganizationGroupByArgsSchema: z.ZodType<Prisma.OrganizationGroupByArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithAggregationInputSchema.array(),OrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: OrganizationScalarFieldEnumSchema.array(),
  having: OrganizationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrganizationFindUniqueArgsSchema: z.ZodType<Prisma.OrganizationFindUniqueArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFindUniqueOrThrowArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const GovernmentOrganizationFindFirstArgsSchema: z.ZodType<Prisma.GovernmentOrganizationFindFirstArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ GovernmentOrganizationOrderByWithRelationInputSchema.array(),GovernmentOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: GovernmentOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GovernmentOrganizationScalarFieldEnumSchema,GovernmentOrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GovernmentOrganizationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GovernmentOrganizationFindFirstOrThrowArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ GovernmentOrganizationOrderByWithRelationInputSchema.array(),GovernmentOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: GovernmentOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GovernmentOrganizationScalarFieldEnumSchema,GovernmentOrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GovernmentOrganizationFindManyArgsSchema: z.ZodType<Prisma.GovernmentOrganizationFindManyArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ GovernmentOrganizationOrderByWithRelationInputSchema.array(),GovernmentOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: GovernmentOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GovernmentOrganizationScalarFieldEnumSchema,GovernmentOrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GovernmentOrganizationAggregateArgsSchema: z.ZodType<Prisma.GovernmentOrganizationAggregateArgs> = z.object({
  where: GovernmentOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ GovernmentOrganizationOrderByWithRelationInputSchema.array(),GovernmentOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: GovernmentOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GovernmentOrganizationGroupByArgsSchema: z.ZodType<Prisma.GovernmentOrganizationGroupByArgs> = z.object({
  where: GovernmentOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ GovernmentOrganizationOrderByWithAggregationInputSchema.array(),GovernmentOrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: GovernmentOrganizationScalarFieldEnumSchema.array(),
  having: GovernmentOrganizationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GovernmentOrganizationFindUniqueArgsSchema: z.ZodType<Prisma.GovernmentOrganizationFindUniqueArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereUniqueInputSchema,
}).strict() ;

export const GovernmentOrganizationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GovernmentOrganizationFindUniqueOrThrowArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereUniqueInputSchema,
}).strict() ;

export const PersonFindFirstArgsSchema: z.ZodType<Prisma.PersonFindFirstArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonScalarFieldEnumSchema,PersonScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonFindFirstOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonScalarFieldEnumSchema,PersonScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PersonFindManyArgsSchema: z.ZodType<Prisma.PersonFindManyArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonScalarFieldEnumSchema,PersonScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PersonAggregateArgsSchema: z.ZodType<Prisma.PersonAggregateArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PersonGroupByArgsSchema: z.ZodType<Prisma.PersonGroupByArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithAggregationInputSchema.array(),PersonOrderByWithAggregationInputSchema ]).optional(),
  by: PersonScalarFieldEnumSchema.array(),
  having: PersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PersonFindUniqueArgsSchema: z.ZodType<Prisma.PersonFindUniqueArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() ;

export const PersonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonFindUniqueOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() ;

export const MonetaryAmountFindFirstArgsSchema: z.ZodType<Prisma.MonetaryAmountFindFirstArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereInputSchema.optional(),
  orderBy: z.union([ MonetaryAmountOrderByWithRelationInputSchema.array(),MonetaryAmountOrderByWithRelationInputSchema ]).optional(),
  cursor: MonetaryAmountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MonetaryAmountScalarFieldEnumSchema,MonetaryAmountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MonetaryAmountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MonetaryAmountFindFirstOrThrowArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereInputSchema.optional(),
  orderBy: z.union([ MonetaryAmountOrderByWithRelationInputSchema.array(),MonetaryAmountOrderByWithRelationInputSchema ]).optional(),
  cursor: MonetaryAmountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MonetaryAmountScalarFieldEnumSchema,MonetaryAmountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MonetaryAmountFindManyArgsSchema: z.ZodType<Prisma.MonetaryAmountFindManyArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereInputSchema.optional(),
  orderBy: z.union([ MonetaryAmountOrderByWithRelationInputSchema.array(),MonetaryAmountOrderByWithRelationInputSchema ]).optional(),
  cursor: MonetaryAmountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MonetaryAmountScalarFieldEnumSchema,MonetaryAmountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MonetaryAmountAggregateArgsSchema: z.ZodType<Prisma.MonetaryAmountAggregateArgs> = z.object({
  where: MonetaryAmountWhereInputSchema.optional(),
  orderBy: z.union([ MonetaryAmountOrderByWithRelationInputSchema.array(),MonetaryAmountOrderByWithRelationInputSchema ]).optional(),
  cursor: MonetaryAmountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MonetaryAmountGroupByArgsSchema: z.ZodType<Prisma.MonetaryAmountGroupByArgs> = z.object({
  where: MonetaryAmountWhereInputSchema.optional(),
  orderBy: z.union([ MonetaryAmountOrderByWithAggregationInputSchema.array(),MonetaryAmountOrderByWithAggregationInputSchema ]).optional(),
  by: MonetaryAmountScalarFieldEnumSchema.array(),
  having: MonetaryAmountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MonetaryAmountFindUniqueArgsSchema: z.ZodType<Prisma.MonetaryAmountFindUniqueArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereUniqueInputSchema,
}).strict() ;

export const MonetaryAmountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MonetaryAmountFindUniqueOrThrowArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereUniqueInputSchema,
}).strict() ;

export const StatusEnumerationFindFirstArgsSchema: z.ZodType<Prisma.StatusEnumerationFindFirstArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereInputSchema.optional(),
  orderBy: z.union([ StatusEnumerationOrderByWithRelationInputSchema.array(),StatusEnumerationOrderByWithRelationInputSchema ]).optional(),
  cursor: StatusEnumerationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StatusEnumerationScalarFieldEnumSchema,StatusEnumerationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StatusEnumerationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StatusEnumerationFindFirstOrThrowArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereInputSchema.optional(),
  orderBy: z.union([ StatusEnumerationOrderByWithRelationInputSchema.array(),StatusEnumerationOrderByWithRelationInputSchema ]).optional(),
  cursor: StatusEnumerationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StatusEnumerationScalarFieldEnumSchema,StatusEnumerationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StatusEnumerationFindManyArgsSchema: z.ZodType<Prisma.StatusEnumerationFindManyArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereInputSchema.optional(),
  orderBy: z.union([ StatusEnumerationOrderByWithRelationInputSchema.array(),StatusEnumerationOrderByWithRelationInputSchema ]).optional(),
  cursor: StatusEnumerationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StatusEnumerationScalarFieldEnumSchema,StatusEnumerationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StatusEnumerationAggregateArgsSchema: z.ZodType<Prisma.StatusEnumerationAggregateArgs> = z.object({
  where: StatusEnumerationWhereInputSchema.optional(),
  orderBy: z.union([ StatusEnumerationOrderByWithRelationInputSchema.array(),StatusEnumerationOrderByWithRelationInputSchema ]).optional(),
  cursor: StatusEnumerationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StatusEnumerationGroupByArgsSchema: z.ZodType<Prisma.StatusEnumerationGroupByArgs> = z.object({
  where: StatusEnumerationWhereInputSchema.optional(),
  orderBy: z.union([ StatusEnumerationOrderByWithAggregationInputSchema.array(),StatusEnumerationOrderByWithAggregationInputSchema ]).optional(),
  by: StatusEnumerationScalarFieldEnumSchema.array(),
  having: StatusEnumerationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StatusEnumerationFindUniqueArgsSchema: z.ZodType<Prisma.StatusEnumerationFindUniqueArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereUniqueInputSchema,
}).strict() ;

export const StatusEnumerationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StatusEnumerationFindUniqueOrThrowArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereUniqueInputSchema,
}).strict() ;

export const ThingCreateArgsSchema: z.ZodType<Prisma.ThingCreateArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  data: z.union([ ThingCreateInputSchema,ThingUncheckedCreateInputSchema ]),
}).strict() ;

export const ThingUpsertArgsSchema: z.ZodType<Prisma.ThingUpsertArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
  create: z.union([ ThingCreateInputSchema,ThingUncheckedCreateInputSchema ]),
  update: z.union([ ThingUpdateInputSchema,ThingUncheckedUpdateInputSchema ]),
}).strict() ;

export const ThingCreateManyArgsSchema: z.ZodType<Prisma.ThingCreateManyArgs> = z.object({
  data: z.union([ ThingCreateManyInputSchema,ThingCreateManyInputSchema.array() ]),
}).strict() ;

export const ThingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ThingCreateManyAndReturnArgs> = z.object({
  data: z.union([ ThingCreateManyInputSchema,ThingCreateManyInputSchema.array() ]),
}).strict() ;

export const ThingDeleteArgsSchema: z.ZodType<Prisma.ThingDeleteArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() ;

export const ThingUpdateArgsSchema: z.ZodType<Prisma.ThingUpdateArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  data: z.union([ ThingUpdateInputSchema,ThingUncheckedUpdateInputSchema ]),
  where: ThingWhereUniqueInputSchema,
}).strict() ;

export const ThingUpdateManyArgsSchema: z.ZodType<Prisma.ThingUpdateManyArgs> = z.object({
  data: z.union([ ThingUpdateManyMutationInputSchema,ThingUncheckedUpdateManyInputSchema ]),
  where: ThingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ThingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ThingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ThingUpdateManyMutationInputSchema,ThingUncheckedUpdateManyInputSchema ]),
  where: ThingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ThingDeleteManyArgsSchema: z.ZodType<Prisma.ThingDeleteManyArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const IntangibleCreateArgsSchema: z.ZodType<Prisma.IntangibleCreateArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  data: z.union([ IntangibleCreateInputSchema,IntangibleUncheckedCreateInputSchema ]),
}).strict() ;

export const IntangibleUpsertArgsSchema: z.ZodType<Prisma.IntangibleUpsertArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereUniqueInputSchema,
  create: z.union([ IntangibleCreateInputSchema,IntangibleUncheckedCreateInputSchema ]),
  update: z.union([ IntangibleUpdateInputSchema,IntangibleUncheckedUpdateInputSchema ]),
}).strict() ;

export const IntangibleCreateManyArgsSchema: z.ZodType<Prisma.IntangibleCreateManyArgs> = z.object({
  data: z.union([ IntangibleCreateManyInputSchema,IntangibleCreateManyInputSchema.array() ]),
}).strict() ;

export const IntangibleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IntangibleCreateManyAndReturnArgs> = z.object({
  data: z.union([ IntangibleCreateManyInputSchema,IntangibleCreateManyInputSchema.array() ]),
}).strict() ;

export const IntangibleDeleteArgsSchema: z.ZodType<Prisma.IntangibleDeleteArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  where: IntangibleWhereUniqueInputSchema,
}).strict() ;

export const IntangibleUpdateArgsSchema: z.ZodType<Prisma.IntangibleUpdateArgs> = z.object({
  select: IntangibleSelectSchema.optional(),
  include: IntangibleIncludeSchema.optional(),
  data: z.union([ IntangibleUpdateInputSchema,IntangibleUncheckedUpdateInputSchema ]),
  where: IntangibleWhereUniqueInputSchema,
}).strict() ;

export const IntangibleUpdateManyArgsSchema: z.ZodType<Prisma.IntangibleUpdateManyArgs> = z.object({
  data: z.union([ IntangibleUpdateManyMutationInputSchema,IntangibleUncheckedUpdateManyInputSchema ]),
  where: IntangibleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const IntangibleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.IntangibleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ IntangibleUpdateManyMutationInputSchema,IntangibleUncheckedUpdateManyInputSchema ]),
  where: IntangibleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const IntangibleDeleteManyArgsSchema: z.ZodType<Prisma.IntangibleDeleteManyArgs> = z.object({
  where: IntangibleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StructuredValueCreateArgsSchema: z.ZodType<Prisma.StructuredValueCreateArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  data: z.union([ StructuredValueCreateInputSchema,StructuredValueUncheckedCreateInputSchema ]),
}).strict() ;

export const StructuredValueUpsertArgsSchema: z.ZodType<Prisma.StructuredValueUpsertArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereUniqueInputSchema,
  create: z.union([ StructuredValueCreateInputSchema,StructuredValueUncheckedCreateInputSchema ]),
  update: z.union([ StructuredValueUpdateInputSchema,StructuredValueUncheckedUpdateInputSchema ]),
}).strict() ;

export const StructuredValueCreateManyArgsSchema: z.ZodType<Prisma.StructuredValueCreateManyArgs> = z.object({
  data: z.union([ StructuredValueCreateManyInputSchema,StructuredValueCreateManyInputSchema.array() ]),
}).strict() ;

export const StructuredValueCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StructuredValueCreateManyAndReturnArgs> = z.object({
  data: z.union([ StructuredValueCreateManyInputSchema,StructuredValueCreateManyInputSchema.array() ]),
}).strict() ;

export const StructuredValueDeleteArgsSchema: z.ZodType<Prisma.StructuredValueDeleteArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  where: StructuredValueWhereUniqueInputSchema,
}).strict() ;

export const StructuredValueUpdateArgsSchema: z.ZodType<Prisma.StructuredValueUpdateArgs> = z.object({
  select: StructuredValueSelectSchema.optional(),
  include: StructuredValueIncludeSchema.optional(),
  data: z.union([ StructuredValueUpdateInputSchema,StructuredValueUncheckedUpdateInputSchema ]),
  where: StructuredValueWhereUniqueInputSchema,
}).strict() ;

export const StructuredValueUpdateManyArgsSchema: z.ZodType<Prisma.StructuredValueUpdateManyArgs> = z.object({
  data: z.union([ StructuredValueUpdateManyMutationInputSchema,StructuredValueUncheckedUpdateManyInputSchema ]),
  where: StructuredValueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StructuredValueUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StructuredValueUpdateManyAndReturnArgs> = z.object({
  data: z.union([ StructuredValueUpdateManyMutationInputSchema,StructuredValueUncheckedUpdateManyInputSchema ]),
  where: StructuredValueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StructuredValueDeleteManyArgsSchema: z.ZodType<Prisma.StructuredValueDeleteManyArgs> = z.object({
  where: StructuredValueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ContactPointCreateArgsSchema: z.ZodType<Prisma.ContactPointCreateArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  data: z.union([ ContactPointCreateInputSchema,ContactPointUncheckedCreateInputSchema ]),
}).strict() ;

export const ContactPointUpsertArgsSchema: z.ZodType<Prisma.ContactPointUpsertArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereUniqueInputSchema,
  create: z.union([ ContactPointCreateInputSchema,ContactPointUncheckedCreateInputSchema ]),
  update: z.union([ ContactPointUpdateInputSchema,ContactPointUncheckedUpdateInputSchema ]),
}).strict() ;

export const ContactPointCreateManyArgsSchema: z.ZodType<Prisma.ContactPointCreateManyArgs> = z.object({
  data: z.union([ ContactPointCreateManyInputSchema,ContactPointCreateManyInputSchema.array() ]),
}).strict() ;

export const ContactPointCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContactPointCreateManyAndReturnArgs> = z.object({
  data: z.union([ ContactPointCreateManyInputSchema,ContactPointCreateManyInputSchema.array() ]),
}).strict() ;

export const ContactPointDeleteArgsSchema: z.ZodType<Prisma.ContactPointDeleteArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  where: ContactPointWhereUniqueInputSchema,
}).strict() ;

export const ContactPointUpdateArgsSchema: z.ZodType<Prisma.ContactPointUpdateArgs> = z.object({
  select: ContactPointSelectSchema.optional(),
  include: ContactPointIncludeSchema.optional(),
  data: z.union([ ContactPointUpdateInputSchema,ContactPointUncheckedUpdateInputSchema ]),
  where: ContactPointWhereUniqueInputSchema,
}).strict() ;

export const ContactPointUpdateManyArgsSchema: z.ZodType<Prisma.ContactPointUpdateManyArgs> = z.object({
  data: z.union([ ContactPointUpdateManyMutationInputSchema,ContactPointUncheckedUpdateManyInputSchema ]),
  where: ContactPointWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ContactPointUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ContactPointUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ContactPointUpdateManyMutationInputSchema,ContactPointUncheckedUpdateManyInputSchema ]),
  where: ContactPointWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ContactPointDeleteManyArgsSchema: z.ZodType<Prisma.ContactPointDeleteManyArgs> = z.object({
  where: ContactPointWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceCreateArgsSchema: z.ZodType<Prisma.ServiceCreateArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  data: z.union([ ServiceCreateInputSchema,ServiceUncheckedCreateInputSchema ]),
}).strict() ;

export const ServiceUpsertArgsSchema: z.ZodType<Prisma.ServiceUpsertArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
  create: z.union([ ServiceCreateInputSchema,ServiceUncheckedCreateInputSchema ]),
  update: z.union([ ServiceUpdateInputSchema,ServiceUncheckedUpdateInputSchema ]),
}).strict() ;

export const ServiceCreateManyArgsSchema: z.ZodType<Prisma.ServiceCreateManyArgs> = z.object({
  data: z.union([ ServiceCreateManyInputSchema,ServiceCreateManyInputSchema.array() ]),
}).strict() ;

export const ServiceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceCreateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceCreateManyInputSchema,ServiceCreateManyInputSchema.array() ]),
}).strict() ;

export const ServiceDeleteArgsSchema: z.ZodType<Prisma.ServiceDeleteArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceUpdateArgsSchema: z.ZodType<Prisma.ServiceUpdateArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  data: z.union([ ServiceUpdateInputSchema,ServiceUncheckedUpdateInputSchema ]),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceUpdateManyArgsSchema: z.ZodType<Prisma.ServiceUpdateManyArgs> = z.object({
  data: z.union([ ServiceUpdateManyMutationInputSchema,ServiceUncheckedUpdateManyInputSchema ]),
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceUpdateManyMutationInputSchema,ServiceUncheckedUpdateManyInputSchema ]),
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceDeleteManyArgsSchema: z.ZodType<Prisma.ServiceDeleteManyArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const FinancialProductCreateArgsSchema: z.ZodType<Prisma.FinancialProductCreateArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  data: z.union([ FinancialProductCreateInputSchema,FinancialProductUncheckedCreateInputSchema ]),
}).strict() ;

export const FinancialProductUpsertArgsSchema: z.ZodType<Prisma.FinancialProductUpsertArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereUniqueInputSchema,
  create: z.union([ FinancialProductCreateInputSchema,FinancialProductUncheckedCreateInputSchema ]),
  update: z.union([ FinancialProductUpdateInputSchema,FinancialProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const FinancialProductCreateManyArgsSchema: z.ZodType<Prisma.FinancialProductCreateManyArgs> = z.object({
  data: z.union([ FinancialProductCreateManyInputSchema,FinancialProductCreateManyInputSchema.array() ]),
}).strict() ;

export const FinancialProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FinancialProductCreateManyAndReturnArgs> = z.object({
  data: z.union([ FinancialProductCreateManyInputSchema,FinancialProductCreateManyInputSchema.array() ]),
}).strict() ;

export const FinancialProductDeleteArgsSchema: z.ZodType<Prisma.FinancialProductDeleteArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  where: FinancialProductWhereUniqueInputSchema,
}).strict() ;

export const FinancialProductUpdateArgsSchema: z.ZodType<Prisma.FinancialProductUpdateArgs> = z.object({
  select: FinancialProductSelectSchema.optional(),
  include: FinancialProductIncludeSchema.optional(),
  data: z.union([ FinancialProductUpdateInputSchema,FinancialProductUncheckedUpdateInputSchema ]),
  where: FinancialProductWhereUniqueInputSchema,
}).strict() ;

export const FinancialProductUpdateManyArgsSchema: z.ZodType<Prisma.FinancialProductUpdateManyArgs> = z.object({
  data: z.union([ FinancialProductUpdateManyMutationInputSchema,FinancialProductUncheckedUpdateManyInputSchema ]),
  where: FinancialProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const FinancialProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.FinancialProductUpdateManyAndReturnArgs> = z.object({
  data: z.union([ FinancialProductUpdateManyMutationInputSchema,FinancialProductUncheckedUpdateManyInputSchema ]),
  where: FinancialProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const FinancialProductDeleteManyArgsSchema: z.ZodType<Prisma.FinancialProductDeleteManyArgs> = z.object({
  where: FinancialProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrganizationCreateArgsSchema: z.ZodType<Prisma.OrganizationCreateArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  data: z.union([ OrganizationCreateInputSchema,OrganizationUncheckedCreateInputSchema ]),
}).strict() ;

export const OrganizationUpsertArgsSchema: z.ZodType<Prisma.OrganizationUpsertArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
  create: z.union([ OrganizationCreateInputSchema,OrganizationUncheckedCreateInputSchema ]),
  update: z.union([ OrganizationUpdateInputSchema,OrganizationUncheckedUpdateInputSchema ]),
}).strict() ;

export const OrganizationCreateManyArgsSchema: z.ZodType<Prisma.OrganizationCreateManyArgs> = z.object({
  data: z.union([ OrganizationCreateManyInputSchema,OrganizationCreateManyInputSchema.array() ]),
}).strict() ;

export const OrganizationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationCreateManyInputSchema,OrganizationCreateManyInputSchema.array() ]),
}).strict() ;

export const OrganizationDeleteArgsSchema: z.ZodType<Prisma.OrganizationDeleteArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationUpdateArgsSchema: z.ZodType<Prisma.OrganizationUpdateArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: OrganizationIncludeSchema.optional(),
  data: z.union([ OrganizationUpdateInputSchema,OrganizationUncheckedUpdateInputSchema ]),
  where: OrganizationWhereUniqueInputSchema,
}).strict() ;

export const OrganizationUpdateManyArgsSchema: z.ZodType<Prisma.OrganizationUpdateManyArgs> = z.object({
  data: z.union([ OrganizationUpdateManyMutationInputSchema,OrganizationUncheckedUpdateManyInputSchema ]),
  where: OrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrganizationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationUpdateManyMutationInputSchema,OrganizationUncheckedUpdateManyInputSchema ]),
  where: OrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrganizationDeleteManyArgsSchema: z.ZodType<Prisma.OrganizationDeleteManyArgs> = z.object({
  where: OrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GovernmentOrganizationCreateArgsSchema: z.ZodType<Prisma.GovernmentOrganizationCreateArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  data: z.union([ GovernmentOrganizationCreateInputSchema,GovernmentOrganizationUncheckedCreateInputSchema ]),
}).strict() ;

export const GovernmentOrganizationUpsertArgsSchema: z.ZodType<Prisma.GovernmentOrganizationUpsertArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereUniqueInputSchema,
  create: z.union([ GovernmentOrganizationCreateInputSchema,GovernmentOrganizationUncheckedCreateInputSchema ]),
  update: z.union([ GovernmentOrganizationUpdateInputSchema,GovernmentOrganizationUncheckedUpdateInputSchema ]),
}).strict() ;

export const GovernmentOrganizationCreateManyArgsSchema: z.ZodType<Prisma.GovernmentOrganizationCreateManyArgs> = z.object({
  data: z.union([ GovernmentOrganizationCreateManyInputSchema,GovernmentOrganizationCreateManyInputSchema.array() ]),
}).strict() ;

export const GovernmentOrganizationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GovernmentOrganizationCreateManyAndReturnArgs> = z.object({
  data: z.union([ GovernmentOrganizationCreateManyInputSchema,GovernmentOrganizationCreateManyInputSchema.array() ]),
}).strict() ;

export const GovernmentOrganizationDeleteArgsSchema: z.ZodType<Prisma.GovernmentOrganizationDeleteArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  where: GovernmentOrganizationWhereUniqueInputSchema,
}).strict() ;

export const GovernmentOrganizationUpdateArgsSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateArgs> = z.object({
  select: GovernmentOrganizationSelectSchema.optional(),
  include: GovernmentOrganizationIncludeSchema.optional(),
  data: z.union([ GovernmentOrganizationUpdateInputSchema,GovernmentOrganizationUncheckedUpdateInputSchema ]),
  where: GovernmentOrganizationWhereUniqueInputSchema,
}).strict() ;

export const GovernmentOrganizationUpdateManyArgsSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateManyArgs> = z.object({
  data: z.union([ GovernmentOrganizationUpdateManyMutationInputSchema,GovernmentOrganizationUncheckedUpdateManyInputSchema ]),
  where: GovernmentOrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GovernmentOrganizationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.GovernmentOrganizationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ GovernmentOrganizationUpdateManyMutationInputSchema,GovernmentOrganizationUncheckedUpdateManyInputSchema ]),
  where: GovernmentOrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GovernmentOrganizationDeleteManyArgsSchema: z.ZodType<Prisma.GovernmentOrganizationDeleteManyArgs> = z.object({
  where: GovernmentOrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PersonCreateArgsSchema: z.ZodType<Prisma.PersonCreateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
}).strict() ;

export const PersonUpsertArgsSchema: z.ZodType<Prisma.PersonUpsertArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
  create: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
  update: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
}).strict() ;

export const PersonCreateManyArgsSchema: z.ZodType<Prisma.PersonCreateManyArgs> = z.object({
  data: z.union([ PersonCreateManyInputSchema,PersonCreateManyInputSchema.array() ]),
}).strict() ;

export const PersonCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PersonCreateManyAndReturnArgs> = z.object({
  data: z.union([ PersonCreateManyInputSchema,PersonCreateManyInputSchema.array() ]),
}).strict() ;

export const PersonDeleteArgsSchema: z.ZodType<Prisma.PersonDeleteArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() ;

export const PersonUpdateArgsSchema: z.ZodType<Prisma.PersonUpdateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
  where: PersonWhereUniqueInputSchema,
}).strict() ;

export const PersonUpdateManyArgsSchema: z.ZodType<Prisma.PersonUpdateManyArgs> = z.object({
  data: z.union([ PersonUpdateManyMutationInputSchema,PersonUncheckedUpdateManyInputSchema ]),
  where: PersonWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PersonUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PersonUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PersonUpdateManyMutationInputSchema,PersonUncheckedUpdateManyInputSchema ]),
  where: PersonWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PersonDeleteManyArgsSchema: z.ZodType<Prisma.PersonDeleteManyArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MonetaryAmountCreateArgsSchema: z.ZodType<Prisma.MonetaryAmountCreateArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  data: z.union([ MonetaryAmountCreateInputSchema,MonetaryAmountUncheckedCreateInputSchema ]),
}).strict() ;

export const MonetaryAmountUpsertArgsSchema: z.ZodType<Prisma.MonetaryAmountUpsertArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereUniqueInputSchema,
  create: z.union([ MonetaryAmountCreateInputSchema,MonetaryAmountUncheckedCreateInputSchema ]),
  update: z.union([ MonetaryAmountUpdateInputSchema,MonetaryAmountUncheckedUpdateInputSchema ]),
}).strict() ;

export const MonetaryAmountCreateManyArgsSchema: z.ZodType<Prisma.MonetaryAmountCreateManyArgs> = z.object({
  data: z.union([ MonetaryAmountCreateManyInputSchema,MonetaryAmountCreateManyInputSchema.array() ]),
}).strict() ;

export const MonetaryAmountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MonetaryAmountCreateManyAndReturnArgs> = z.object({
  data: z.union([ MonetaryAmountCreateManyInputSchema,MonetaryAmountCreateManyInputSchema.array() ]),
}).strict() ;

export const MonetaryAmountDeleteArgsSchema: z.ZodType<Prisma.MonetaryAmountDeleteArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  where: MonetaryAmountWhereUniqueInputSchema,
}).strict() ;

export const MonetaryAmountUpdateArgsSchema: z.ZodType<Prisma.MonetaryAmountUpdateArgs> = z.object({
  select: MonetaryAmountSelectSchema.optional(),
  include: MonetaryAmountIncludeSchema.optional(),
  data: z.union([ MonetaryAmountUpdateInputSchema,MonetaryAmountUncheckedUpdateInputSchema ]),
  where: MonetaryAmountWhereUniqueInputSchema,
}).strict() ;

export const MonetaryAmountUpdateManyArgsSchema: z.ZodType<Prisma.MonetaryAmountUpdateManyArgs> = z.object({
  data: z.union([ MonetaryAmountUpdateManyMutationInputSchema,MonetaryAmountUncheckedUpdateManyInputSchema ]),
  where: MonetaryAmountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MonetaryAmountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MonetaryAmountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MonetaryAmountUpdateManyMutationInputSchema,MonetaryAmountUncheckedUpdateManyInputSchema ]),
  where: MonetaryAmountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MonetaryAmountDeleteManyArgsSchema: z.ZodType<Prisma.MonetaryAmountDeleteManyArgs> = z.object({
  where: MonetaryAmountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StatusEnumerationCreateArgsSchema: z.ZodType<Prisma.StatusEnumerationCreateArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  data: z.union([ StatusEnumerationCreateInputSchema,StatusEnumerationUncheckedCreateInputSchema ]),
}).strict() ;

export const StatusEnumerationUpsertArgsSchema: z.ZodType<Prisma.StatusEnumerationUpsertArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereUniqueInputSchema,
  create: z.union([ StatusEnumerationCreateInputSchema,StatusEnumerationUncheckedCreateInputSchema ]),
  update: z.union([ StatusEnumerationUpdateInputSchema,StatusEnumerationUncheckedUpdateInputSchema ]),
}).strict() ;

export const StatusEnumerationCreateManyArgsSchema: z.ZodType<Prisma.StatusEnumerationCreateManyArgs> = z.object({
  data: z.union([ StatusEnumerationCreateManyInputSchema,StatusEnumerationCreateManyInputSchema.array() ]),
}).strict() ;

export const StatusEnumerationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StatusEnumerationCreateManyAndReturnArgs> = z.object({
  data: z.union([ StatusEnumerationCreateManyInputSchema,StatusEnumerationCreateManyInputSchema.array() ]),
}).strict() ;

export const StatusEnumerationDeleteArgsSchema: z.ZodType<Prisma.StatusEnumerationDeleteArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  where: StatusEnumerationWhereUniqueInputSchema,
}).strict() ;

export const StatusEnumerationUpdateArgsSchema: z.ZodType<Prisma.StatusEnumerationUpdateArgs> = z.object({
  select: StatusEnumerationSelectSchema.optional(),
  include: StatusEnumerationIncludeSchema.optional(),
  data: z.union([ StatusEnumerationUpdateInputSchema,StatusEnumerationUncheckedUpdateInputSchema ]),
  where: StatusEnumerationWhereUniqueInputSchema,
}).strict() ;

export const StatusEnumerationUpdateManyArgsSchema: z.ZodType<Prisma.StatusEnumerationUpdateManyArgs> = z.object({
  data: z.union([ StatusEnumerationUpdateManyMutationInputSchema,StatusEnumerationUncheckedUpdateManyInputSchema ]),
  where: StatusEnumerationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StatusEnumerationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StatusEnumerationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ StatusEnumerationUpdateManyMutationInputSchema,StatusEnumerationUncheckedUpdateManyInputSchema ]),
  where: StatusEnumerationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StatusEnumerationDeleteManyArgsSchema: z.ZodType<Prisma.StatusEnumerationDeleteManyArgs> = z.object({
  where: StatusEnumerationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;