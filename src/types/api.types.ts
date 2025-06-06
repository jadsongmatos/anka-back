import z from "zod";
import "zod-openapi/extend";
import {
  AssetSchema as AssetSchemaPrisma,
  ClientSchema as ClientSchemaPrisma,
  ClientCreateWithoutAllocationsInputSchema,
  ClientAssetSchema as ClientAssetSchemaPrisma,
} from "../../prisma/zod";

// Basic utility schemas
export const ParamsIdSchema = z
  .object({
    id: z.coerce.number().openapi({
      description: "ID",
      example: 1,
    }),
  })
  .openapi({ ref: "params-id" });

export const SuccessResponseSchema = z
  .object({
    success: z.boolean().openapi({
      description: "Operation success status",
      example: true,
    }),
  })
  .openapi({ ref: "success-response" });

// Export Prisma schemas with OpenAPI definitions
export const AssetSchemaQuery = AssetSchemaPrisma.partial().openapi({
  ref: "asset",
});
export const AssetSchema = AssetSchemaPrisma.openapi({ ref: "asset" });

export const ClientSchemaQuery = ClientSchemaPrisma.partial().openapi({
  ref: "client",
});
export const ClientSchema = ClientSchemaPrisma.openapi({ ref: "client" });
export const ClientCreate = ClientCreateWithoutAllocationsInputSchema.openapi({
  ref: "client-create",
});

export const ClientAssetSchemaQuery = ClientAssetSchemaPrisma.partial().openapi(
  { ref: "client-asset-select" }
);
export const ClientAssetSchema = ClientAssetSchemaPrisma.openapi({
  ref: "client-asset-select",
});
