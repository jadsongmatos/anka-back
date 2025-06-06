import { z } from 'zod';
import type { Prisma } from '../../generated/prisma';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const ClientScalarFieldEnumSchema = z.enum(['id','name','email','active']);

export const AssetScalarFieldEnumSchema = z.enum(['id','name']);

export const ClientAssetScalarFieldEnumSchema = z.enum(['id','clientId','assetId','value']);

export const SortOrderSchema = z.enum(['asc','desc']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const ClientSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  active: z.boolean(),
})

export type Client = z.infer<typeof ClientSchema>

/////////////////////////////////////////
// ASSET SCHEMA
/////////////////////////////////////////

export const AssetSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Asset = z.infer<typeof AssetSchema>

/////////////////////////////////////////
// CLIENT ASSET SCHEMA
/////////////////////////////////////////

export const ClientAssetSchema = z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  assetId: z.number().int(),
  value: z.number(),
})

export type ClientAsset = z.infer<typeof ClientAssetSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CLIENT
//------------------------------------------------------

export const ClientIncludeSchema: z.ZodType<Prisma.ClientInclude> = z.object({
  allocations: z.union([z.boolean(),z.lazy(() => ClientAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClientArgsSchema: z.ZodType<Prisma.ClientDefaultArgs> = z.object({
  select: z.lazy(() => ClientSelectSchema).optional(),
  include: z.lazy(() => ClientIncludeSchema).optional(),
}).strict();

export const ClientCountOutputTypeArgsSchema: z.ZodType<Prisma.ClientCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClientCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClientCountOutputTypeSelectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = z.object({
  allocations: z.boolean().optional(),
}).strict();

export const ClientSelectSchema: z.ZodType<Prisma.ClientSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  active: z.boolean().optional(),
  allocations: z.union([z.boolean(),z.lazy(() => ClientAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ASSET
//------------------------------------------------------

export const AssetIncludeSchema: z.ZodType<Prisma.AssetInclude> = z.object({
  allocations: z.union([z.boolean(),z.lazy(() => ClientAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AssetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AssetArgsSchema: z.ZodType<Prisma.AssetDefaultArgs> = z.object({
  select: z.lazy(() => AssetSelectSchema).optional(),
  include: z.lazy(() => AssetIncludeSchema).optional(),
}).strict();

export const AssetCountOutputTypeArgsSchema: z.ZodType<Prisma.AssetCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AssetCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AssetCountOutputTypeSelectSchema: z.ZodType<Prisma.AssetCountOutputTypeSelect> = z.object({
  allocations: z.boolean().optional(),
}).strict();

export const AssetSelectSchema: z.ZodType<Prisma.AssetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  allocations: z.union([z.boolean(),z.lazy(() => ClientAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AssetCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CLIENT ASSET
//------------------------------------------------------

export const ClientAssetIncludeSchema: z.ZodType<Prisma.ClientAssetInclude> = z.object({
  client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  asset: z.union([z.boolean(),z.lazy(() => AssetArgsSchema)]).optional(),
}).strict()

export const ClientAssetArgsSchema: z.ZodType<Prisma.ClientAssetDefaultArgs> = z.object({
  select: z.lazy(() => ClientAssetSelectSchema).optional(),
  include: z.lazy(() => ClientAssetIncludeSchema).optional(),
}).strict();

export const ClientAssetSelectSchema: z.ZodType<Prisma.ClientAssetSelect> = z.object({
  id: z.boolean().optional(),
  clientId: z.boolean().optional(),
  assetId: z.boolean().optional(),
  value: z.boolean().optional(),
  client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
  asset: z.union([z.boolean(),z.lazy(() => AssetArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ClientWhereInputSchema: z.ZodType<Prisma.ClientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  allocations: z.lazy(() => ClientAssetListRelationFilterSchema).optional()
}).strict();

export const ClientOrderByWithRelationInputSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  allocations: z.lazy(() => ClientAssetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ClientWhereUniqueInputSchema: z.ZodType<Prisma.ClientWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  allocations: z.lazy(() => ClientAssetListRelationFilterSchema).optional()
}).strict());

export const ClientOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClientSumOrderByAggregateInputSchema).optional()
}).strict();

export const ClientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const AssetWhereInputSchema: z.ZodType<Prisma.AssetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  allocations: z.lazy(() => ClientAssetListRelationFilterSchema).optional()
}).strict();

export const AssetOrderByWithRelationInputSchema: z.ZodType<Prisma.AssetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  allocations: z.lazy(() => ClientAssetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AssetWhereUniqueInputSchema: z.ZodType<Prisma.AssetWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  allocations: z.lazy(() => ClientAssetListRelationFilterSchema).optional()
}).strict());

export const AssetOrderByWithAggregationInputSchema: z.ZodType<Prisma.AssetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AssetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AssetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AssetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AssetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AssetSumOrderByAggregateInputSchema).optional()
}).strict();

export const AssetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AssetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AssetScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ClientAssetWhereInputSchema: z.ZodType<Prisma.ClientAssetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClientAssetWhereInputSchema),z.lazy(() => ClientAssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientAssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientAssetWhereInputSchema),z.lazy(() => ClientAssetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  clientId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assetId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  client: z.union([ z.lazy(() => ClientScalarRelationFilterSchema),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  asset: z.union([ z.lazy(() => AssetScalarRelationFilterSchema),z.lazy(() => AssetWhereInputSchema) ]).optional(),
}).strict();

export const ClientAssetOrderByWithRelationInputSchema: z.ZodType<Prisma.ClientAssetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputSchema).optional(),
  asset: z.lazy(() => AssetOrderByWithRelationInputSchema).optional()
}).strict();

export const ClientAssetWhereUniqueInputSchema: z.ZodType<Prisma.ClientAssetWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    clientId_assetId: z.lazy(() => ClientAssetClientIdAssetIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    clientId_assetId: z.lazy(() => ClientAssetClientIdAssetIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  clientId_assetId: z.lazy(() => ClientAssetClientIdAssetIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ClientAssetWhereInputSchema),z.lazy(() => ClientAssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientAssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientAssetWhereInputSchema),z.lazy(() => ClientAssetWhereInputSchema).array() ]).optional(),
  clientId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  assetId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  client: z.union([ z.lazy(() => ClientScalarRelationFilterSchema),z.lazy(() => ClientWhereInputSchema) ]).optional(),
  asset: z.union([ z.lazy(() => AssetScalarRelationFilterSchema),z.lazy(() => AssetWhereInputSchema) ]).optional(),
}).strict());

export const ClientAssetOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClientAssetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClientAssetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClientAssetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClientAssetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClientAssetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClientAssetSumOrderByAggregateInputSchema).optional()
}).strict();

export const ClientAssetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClientAssetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClientAssetScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientAssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientAssetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientAssetScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientAssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  clientId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  assetId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ClientCreateInputSchema: z.ZodType<Prisma.ClientCreateInput> = z.object({
  name: z.string(),
  email: z.string(),
  active: z.boolean().optional(),
  allocations: z.lazy(() => ClientAssetCreateNestedManyWithoutClientInputSchema).optional()
}).strict();

export const ClientUncheckedCreateInputSchema: z.ZodType<Prisma.ClientUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  active: z.boolean().optional(),
  allocations: z.lazy(() => ClientAssetUncheckedCreateNestedManyWithoutClientInputSchema).optional()
}).strict();

export const ClientUpdateInputSchema: z.ZodType<Prisma.ClientUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allocations: z.lazy(() => ClientAssetUpdateManyWithoutClientNestedInputSchema).optional()
}).strict();

export const ClientUncheckedUpdateInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allocations: z.lazy(() => ClientAssetUncheckedUpdateManyWithoutClientNestedInputSchema).optional()
}).strict();

export const ClientCreateManyInputSchema: z.ZodType<Prisma.ClientCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  active: z.boolean().optional()
}).strict();

export const ClientUpdateManyMutationInputSchema: z.ZodType<Prisma.ClientUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetCreateInputSchema: z.ZodType<Prisma.AssetCreateInput> = z.object({
  name: z.string(),
  allocations: z.lazy(() => ClientAssetCreateNestedManyWithoutAssetInputSchema).optional()
}).strict();

export const AssetUncheckedCreateInputSchema: z.ZodType<Prisma.AssetUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  allocations: z.lazy(() => ClientAssetUncheckedCreateNestedManyWithoutAssetInputSchema).optional()
}).strict();

export const AssetUpdateInputSchema: z.ZodType<Prisma.AssetUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allocations: z.lazy(() => ClientAssetUpdateManyWithoutAssetNestedInputSchema).optional()
}).strict();

export const AssetUncheckedUpdateInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allocations: z.lazy(() => ClientAssetUncheckedUpdateManyWithoutAssetNestedInputSchema).optional()
}).strict();

export const AssetCreateManyInputSchema: z.ZodType<Prisma.AssetCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const AssetUpdateManyMutationInputSchema: z.ZodType<Prisma.AssetUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetCreateInputSchema: z.ZodType<Prisma.ClientAssetCreateInput> = z.object({
  value: z.number(),
  client: z.lazy(() => ClientCreateNestedOneWithoutAllocationsInputSchema),
  asset: z.lazy(() => AssetCreateNestedOneWithoutAllocationsInputSchema)
}).strict();

export const ClientAssetUncheckedCreateInputSchema: z.ZodType<Prisma.ClientAssetUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  assetId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetUpdateInputSchema: z.ZodType<Prisma.ClientAssetUpdateInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutAllocationsNestedInputSchema).optional(),
  asset: z.lazy(() => AssetUpdateOneRequiredWithoutAllocationsNestedInputSchema).optional()
}).strict();

export const ClientAssetUncheckedUpdateInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assetId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetCreateManyInputSchema: z.ZodType<Prisma.ClientAssetCreateManyInput> = z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  assetId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetUpdateManyMutationInputSchema: z.ZodType<Prisma.ClientAssetUpdateManyMutationInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assetId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
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

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const ClientAssetListRelationFilterSchema: z.ZodType<Prisma.ClientAssetListRelationFilter> = z.object({
  every: z.lazy(() => ClientAssetWhereInputSchema).optional(),
  some: z.lazy(() => ClientAssetWhereInputSchema).optional(),
  none: z.lazy(() => ClientAssetWhereInputSchema).optional()
}).strict();

export const ClientAssetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClientAssetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClientSumOrderByAggregateInput> = z.object({
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

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const AssetCountOrderByAggregateInputSchema: z.ZodType<Prisma.AssetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AssetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AssetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetMinOrderByAggregateInputSchema: z.ZodType<Prisma.AssetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetSumOrderByAggregateInputSchema: z.ZodType<Prisma.AssetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
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

export const ClientScalarRelationFilterSchema: z.ZodType<Prisma.ClientScalarRelationFilter> = z.object({
  is: z.lazy(() => ClientWhereInputSchema).optional(),
  isNot: z.lazy(() => ClientWhereInputSchema).optional()
}).strict();

export const AssetScalarRelationFilterSchema: z.ZodType<Prisma.AssetScalarRelationFilter> = z.object({
  is: z.lazy(() => AssetWhereInputSchema).optional(),
  isNot: z.lazy(() => AssetWhereInputSchema).optional()
}).strict();

export const ClientAssetClientIdAssetIdCompoundUniqueInputSchema: z.ZodType<Prisma.ClientAssetClientIdAssetIdCompoundUniqueInput> = z.object({
  clientId: z.number(),
  assetId: z.number()
}).strict();

export const ClientAssetCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAssetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientAssetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAssetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientAssetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAssetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientAssetMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAssetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClientAssetSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClientAssetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
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

export const ClientAssetCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetCreateWithoutClientInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClientAssetUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUncheckedCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetCreateWithoutClientInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const ClientAssetUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.ClientAssetUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetCreateWithoutClientInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClientAssetUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => ClientAssetUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ClientAssetUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetCreateWithoutClientInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClientAssetUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => ClientAssetUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClientAssetCreateNestedManyWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetCreateNestedManyWithoutAssetInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyAssetInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClientAssetUncheckedCreateNestedManyWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUncheckedCreateNestedManyWithoutAssetInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyAssetInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClientAssetUpdateManyWithoutAssetNestedInputSchema: z.ZodType<Prisma.ClientAssetUpdateManyWithoutAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyAssetInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClientAssetUpdateManyWithWhereWithoutAssetInputSchema),z.lazy(() => ClientAssetUpdateManyWithWhereWithoutAssetInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClientAssetUncheckedUpdateManyWithoutAssetNestedInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateManyWithoutAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ClientAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ClientAssetUpsertWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClientAssetCreateManyAssetInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClientAssetWhereUniqueInputSchema),z.lazy(() => ClientAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ClientAssetUpdateWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClientAssetUpdateManyWithWhereWithoutAssetInputSchema),z.lazy(() => ClientAssetUpdateManyWithWhereWithoutAssetInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClientCreateNestedOneWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutAllocationsInput> = z.object({
  create: z.union([ z.lazy(() => ClientCreateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedCreateWithoutAllocationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAllocationsInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional()
}).strict();

export const AssetCreateNestedOneWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetCreateNestedOneWithoutAllocationsInput> = z.object({
  create: z.union([ z.lazy(() => AssetCreateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedCreateWithoutAllocationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AssetCreateOrConnectWithoutAllocationsInputSchema).optional(),
  connect: z.lazy(() => AssetWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ClientUpdateOneRequiredWithoutAllocationsNestedInputSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutAllocationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientCreateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedCreateWithoutAllocationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutAllocationsInputSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutAllocationsInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClientUpdateToOneWithWhereWithoutAllocationsInputSchema),z.lazy(() => ClientUpdateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutAllocationsInputSchema) ]).optional(),
}).strict();

export const AssetUpdateOneRequiredWithoutAllocationsNestedInputSchema: z.ZodType<Prisma.AssetUpdateOneRequiredWithoutAllocationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AssetCreateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedCreateWithoutAllocationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AssetCreateOrConnectWithoutAllocationsInputSchema).optional(),
  upsert: z.lazy(() => AssetUpsertWithoutAllocationsInputSchema).optional(),
  connect: z.lazy(() => AssetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AssetUpdateToOneWithWhereWithoutAllocationsInputSchema),z.lazy(() => AssetUpdateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedUpdateWithoutAllocationsInputSchema) ]).optional(),
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

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
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

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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

export const ClientAssetCreateWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetCreateWithoutClientInput> = z.object({
  value: z.number(),
  asset: z.lazy(() => AssetCreateNestedOneWithoutAllocationsInputSchema)
}).strict();

export const ClientAssetUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUncheckedCreateWithoutClientInput> = z.object({
  id: z.number().int().optional(),
  assetId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetCreateOrConnectWithoutClientInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const ClientAssetCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.ClientAssetCreateManyClientInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClientAssetCreateManyClientInputSchema),z.lazy(() => ClientAssetCreateManyClientInputSchema).array() ]),
}).strict();

export const ClientAssetUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUpsertWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const ClientAssetUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUpdateWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClientAssetUpdateWithoutClientInputSchema),z.lazy(() => ClientAssetUncheckedUpdateWithoutClientInputSchema) ]),
}).strict();

export const ClientAssetUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUpdateManyWithWhereWithoutClientInput> = z.object({
  where: z.lazy(() => ClientAssetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClientAssetUpdateManyMutationInputSchema),z.lazy(() => ClientAssetUncheckedUpdateManyWithoutClientInputSchema) ]),
}).strict();

export const ClientAssetScalarWhereInputSchema: z.ZodType<Prisma.ClientAssetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientAssetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientAssetScalarWhereInputSchema),z.lazy(() => ClientAssetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  clientId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assetId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
}).strict();

export const ClientAssetCreateWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetCreateWithoutAssetInput> = z.object({
  value: z.number(),
  client: z.lazy(() => ClientCreateNestedOneWithoutAllocationsInputSchema)
}).strict();

export const ClientAssetUncheckedCreateWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUncheckedCreateWithoutAssetInput> = z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetCreateOrConnectWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetCreateOrConnectWithoutAssetInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema) ]),
}).strict();

export const ClientAssetCreateManyAssetInputEnvelopeSchema: z.ZodType<Prisma.ClientAssetCreateManyAssetInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClientAssetCreateManyAssetInputSchema),z.lazy(() => ClientAssetCreateManyAssetInputSchema).array() ]),
}).strict();

export const ClientAssetUpsertWithWhereUniqueWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUpsertWithWhereUniqueWithoutAssetInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClientAssetUpdateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedUpdateWithoutAssetInputSchema) ]),
  create: z.union([ z.lazy(() => ClientAssetCreateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedCreateWithoutAssetInputSchema) ]),
}).strict();

export const ClientAssetUpdateWithWhereUniqueWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUpdateWithWhereUniqueWithoutAssetInput> = z.object({
  where: z.lazy(() => ClientAssetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClientAssetUpdateWithoutAssetInputSchema),z.lazy(() => ClientAssetUncheckedUpdateWithoutAssetInputSchema) ]),
}).strict();

export const ClientAssetUpdateManyWithWhereWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUpdateManyWithWhereWithoutAssetInput> = z.object({
  where: z.lazy(() => ClientAssetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClientAssetUpdateManyMutationInputSchema),z.lazy(() => ClientAssetUncheckedUpdateManyWithoutAssetInputSchema) ]),
}).strict();

export const ClientCreateWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientCreateWithoutAllocationsInput> = z.object({
  name: z.string(),
  email: z.string(),
  active: z.boolean().optional()
}).strict();

export const ClientUncheckedCreateWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutAllocationsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  active: z.boolean().optional()
}).strict();

export const ClientCreateOrConnectWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutAllocationsInput> = z.object({
  where: z.lazy(() => ClientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientCreateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedCreateWithoutAllocationsInputSchema) ]),
}).strict();

export const AssetCreateWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetCreateWithoutAllocationsInput> = z.object({
  name: z.string()
}).strict();

export const AssetUncheckedCreateWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetUncheckedCreateWithoutAllocationsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const AssetCreateOrConnectWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetCreateOrConnectWithoutAllocationsInput> = z.object({
  where: z.lazy(() => AssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AssetCreateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedCreateWithoutAllocationsInputSchema) ]),
}).strict();

export const ClientUpsertWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientUpsertWithoutAllocationsInput> = z.object({
  update: z.union([ z.lazy(() => ClientUpdateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutAllocationsInputSchema) ]),
  create: z.union([ z.lazy(() => ClientCreateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedCreateWithoutAllocationsInputSchema) ]),
  where: z.lazy(() => ClientWhereInputSchema).optional()
}).strict();

export const ClientUpdateToOneWithWhereWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutAllocationsInput> = z.object({
  where: z.lazy(() => ClientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClientUpdateWithoutAllocationsInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutAllocationsInputSchema) ]),
}).strict();

export const ClientUpdateWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientUpdateWithoutAllocationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientUncheckedUpdateWithoutAllocationsInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutAllocationsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetUpsertWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetUpsertWithoutAllocationsInput> = z.object({
  update: z.union([ z.lazy(() => AssetUpdateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedUpdateWithoutAllocationsInputSchema) ]),
  create: z.union([ z.lazy(() => AssetCreateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedCreateWithoutAllocationsInputSchema) ]),
  where: z.lazy(() => AssetWhereInputSchema).optional()
}).strict();

export const AssetUpdateToOneWithWhereWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetUpdateToOneWithWhereWithoutAllocationsInput> = z.object({
  where: z.lazy(() => AssetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AssetUpdateWithoutAllocationsInputSchema),z.lazy(() => AssetUncheckedUpdateWithoutAllocationsInputSchema) ]),
}).strict();

export const AssetUpdateWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetUpdateWithoutAllocationsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetUncheckedUpdateWithoutAllocationsInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateWithoutAllocationsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetCreateManyClientInputSchema: z.ZodType<Prisma.ClientAssetCreateManyClientInput> = z.object({
  id: z.number().int().optional(),
  assetId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetUpdateWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUpdateWithoutClientInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  asset: z.lazy(() => AssetUpdateOneRequiredWithoutAllocationsNestedInputSchema).optional()
}).strict();

export const ClientAssetUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateWithoutClientInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assetId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateManyWithoutClientInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  assetId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetCreateManyAssetInputSchema: z.ZodType<Prisma.ClientAssetCreateManyAssetInput> = z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  value: z.number()
}).strict();

export const ClientAssetUpdateWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUpdateWithoutAssetInput> = z.object({
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutAllocationsNestedInputSchema).optional()
}).strict();

export const ClientAssetUncheckedUpdateWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateWithoutAssetInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClientAssetUncheckedUpdateManyWithoutAssetInputSchema: z.ZodType<Prisma.ClientAssetUncheckedUpdateManyWithoutAssetInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ClientFindFirstArgsSchema: z.ZodType<Prisma.ClientFindFirstArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClientFindFirstOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientFindManyArgsSchema: z.ZodType<Prisma.ClientFindManyArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientAggregateArgsSchema: z.ZodType<Prisma.ClientAggregateArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClientGroupByArgsSchema: z.ZodType<Prisma.ClientGroupByArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithAggregationInputSchema.array(),ClientOrderByWithAggregationInputSchema ]).optional(),
  by: ClientScalarFieldEnumSchema.array(),
  having: ClientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClientFindUniqueArgsSchema: z.ZodType<Prisma.ClientFindUniqueArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() ;

export const ClientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClientFindUniqueOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() ;

export const AssetFindFirstArgsSchema: z.ZodType<Prisma.AssetFindFirstArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AssetFindFirstOrThrowArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetFindManyArgsSchema: z.ZodType<Prisma.AssetFindManyArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetAggregateArgsSchema: z.ZodType<Prisma.AssetAggregateArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetGroupByArgsSchema: z.ZodType<Prisma.AssetGroupByArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithAggregationInputSchema.array(),AssetOrderByWithAggregationInputSchema ]).optional(),
  by: AssetScalarFieldEnumSchema.array(),
  having: AssetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetFindUniqueArgsSchema: z.ZodType<Prisma.AssetFindUniqueArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AssetFindUniqueOrThrowArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const ClientAssetFindFirstArgsSchema: z.ZodType<Prisma.ClientAssetFindFirstArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereInputSchema.optional(),
  orderBy: z.union([ ClientAssetOrderByWithRelationInputSchema.array(),ClientAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientAssetScalarFieldEnumSchema,ClientAssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientAssetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClientAssetFindFirstOrThrowArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereInputSchema.optional(),
  orderBy: z.union([ ClientAssetOrderByWithRelationInputSchema.array(),ClientAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientAssetScalarFieldEnumSchema,ClientAssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientAssetFindManyArgsSchema: z.ZodType<Prisma.ClientAssetFindManyArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereInputSchema.optional(),
  orderBy: z.union([ ClientAssetOrderByWithRelationInputSchema.array(),ClientAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientAssetScalarFieldEnumSchema,ClientAssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClientAssetAggregateArgsSchema: z.ZodType<Prisma.ClientAssetAggregateArgs> = z.object({
  where: ClientAssetWhereInputSchema.optional(),
  orderBy: z.union([ ClientAssetOrderByWithRelationInputSchema.array(),ClientAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClientAssetGroupByArgsSchema: z.ZodType<Prisma.ClientAssetGroupByArgs> = z.object({
  where: ClientAssetWhereInputSchema.optional(),
  orderBy: z.union([ ClientAssetOrderByWithAggregationInputSchema.array(),ClientAssetOrderByWithAggregationInputSchema ]).optional(),
  by: ClientAssetScalarFieldEnumSchema.array(),
  having: ClientAssetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClientAssetFindUniqueArgsSchema: z.ZodType<Prisma.ClientAssetFindUniqueArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereUniqueInputSchema,
}).strict() ;

export const ClientAssetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClientAssetFindUniqueOrThrowArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereUniqueInputSchema,
}).strict() ;

export const ClientCreateArgsSchema: z.ZodType<Prisma.ClientCreateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientCreateInputSchema,ClientUncheckedCreateInputSchema ]),
}).strict() ;

export const ClientUpsertArgsSchema: z.ZodType<Prisma.ClientUpsertArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
  create: z.union([ ClientCreateInputSchema,ClientUncheckedCreateInputSchema ]),
  update: z.union([ ClientUpdateInputSchema,ClientUncheckedUpdateInputSchema ]),
}).strict() ;

export const ClientCreateManyArgsSchema: z.ZodType<Prisma.ClientCreateManyArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema,ClientCreateManyInputSchema.array() ]),
}).strict() ;

export const ClientCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema,ClientCreateManyInputSchema.array() ]),
}).strict() ;

export const ClientDeleteArgsSchema: z.ZodType<Prisma.ClientDeleteArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() ;

export const ClientUpdateArgsSchema: z.ZodType<Prisma.ClientUpdateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientUpdateInputSchema,ClientUncheckedUpdateInputSchema ]),
  where: ClientWhereUniqueInputSchema,
}).strict() ;

export const ClientUpdateManyArgsSchema: z.ZodType<Prisma.ClientUpdateManyArgs> = z.object({
  data: z.union([ ClientUpdateManyMutationInputSchema,ClientUncheckedUpdateManyInputSchema ]),
  where: ClientWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClientUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClientUpdateManyMutationInputSchema,ClientUncheckedUpdateManyInputSchema ]),
  where: ClientWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClientDeleteManyArgsSchema: z.ZodType<Prisma.ClientDeleteManyArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AssetCreateArgsSchema: z.ZodType<Prisma.AssetCreateArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  data: z.union([ AssetCreateInputSchema,AssetUncheckedCreateInputSchema ]),
}).strict() ;

export const AssetUpsertArgsSchema: z.ZodType<Prisma.AssetUpsertArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereUniqueInputSchema,
  create: z.union([ AssetCreateInputSchema,AssetUncheckedCreateInputSchema ]),
  update: z.union([ AssetUpdateInputSchema,AssetUncheckedUpdateInputSchema ]),
}).strict() ;

export const AssetCreateManyArgsSchema: z.ZodType<Prisma.AssetCreateManyArgs> = z.object({
  data: z.union([ AssetCreateManyInputSchema,AssetCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AssetCreateManyAndReturnArgs> = z.object({
  data: z.union([ AssetCreateManyInputSchema,AssetCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetDeleteArgsSchema: z.ZodType<Prisma.AssetDeleteArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetUpdateArgsSchema: z.ZodType<Prisma.AssetUpdateArgs> = z.object({
  select: AssetSelectSchema.optional(),
  include: AssetIncludeSchema.optional(),
  data: z.union([ AssetUpdateInputSchema,AssetUncheckedUpdateInputSchema ]),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetUpdateManyArgsSchema: z.ZodType<Prisma.AssetUpdateManyArgs> = z.object({
  data: z.union([ AssetUpdateManyMutationInputSchema,AssetUncheckedUpdateManyInputSchema ]),
  where: AssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AssetUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AssetUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AssetUpdateManyMutationInputSchema,AssetUncheckedUpdateManyInputSchema ]),
  where: AssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AssetDeleteManyArgsSchema: z.ZodType<Prisma.AssetDeleteManyArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClientAssetCreateArgsSchema: z.ZodType<Prisma.ClientAssetCreateArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  data: z.union([ ClientAssetCreateInputSchema,ClientAssetUncheckedCreateInputSchema ]),
}).strict() ;

export const ClientAssetUpsertArgsSchema: z.ZodType<Prisma.ClientAssetUpsertArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereUniqueInputSchema,
  create: z.union([ ClientAssetCreateInputSchema,ClientAssetUncheckedCreateInputSchema ]),
  update: z.union([ ClientAssetUpdateInputSchema,ClientAssetUncheckedUpdateInputSchema ]),
}).strict() ;

export const ClientAssetCreateManyArgsSchema: z.ZodType<Prisma.ClientAssetCreateManyArgs> = z.object({
  data: z.union([ ClientAssetCreateManyInputSchema,ClientAssetCreateManyInputSchema.array() ]),
}).strict() ;

export const ClientAssetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientAssetCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClientAssetCreateManyInputSchema,ClientAssetCreateManyInputSchema.array() ]),
}).strict() ;

export const ClientAssetDeleteArgsSchema: z.ZodType<Prisma.ClientAssetDeleteArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  where: ClientAssetWhereUniqueInputSchema,
}).strict() ;

export const ClientAssetUpdateArgsSchema: z.ZodType<Prisma.ClientAssetUpdateArgs> = z.object({
  select: ClientAssetSelectSchema.optional(),
  include: ClientAssetIncludeSchema.optional(),
  data: z.union([ ClientAssetUpdateInputSchema,ClientAssetUncheckedUpdateInputSchema ]),
  where: ClientAssetWhereUniqueInputSchema,
}).strict() ;

export const ClientAssetUpdateManyArgsSchema: z.ZodType<Prisma.ClientAssetUpdateManyArgs> = z.object({
  data: z.union([ ClientAssetUpdateManyMutationInputSchema,ClientAssetUncheckedUpdateManyInputSchema ]),
  where: ClientAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClientAssetUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientAssetUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClientAssetUpdateManyMutationInputSchema,ClientAssetUncheckedUpdateManyInputSchema ]),
  where: ClientAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClientAssetDeleteManyArgsSchema: z.ZodType<Prisma.ClientAssetDeleteManyArgs> = z.object({
  where: ClientAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;