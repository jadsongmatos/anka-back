"use strict";

import path from "node:path";
import AutoLoad from "@fastify/autoload";
import { FastifyInstance } from "fastify";
import {
  fastifyZodOpenApiPlugin,
  fastifyZodOpenApiTransform,
  fastifyZodOpenApiTransformObject,
  serializerCompiler,
  validatorCompiler,
} from "fastify-zod-openapi";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { type ZodOpenApiVersion } from "zod-openapi";

export default async function (fastify: FastifyInstance, opts: any) {
  // Configura Zod para validação e serialização
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  // Registra o Swagger
  await fastify.register(fastifyZodOpenApiPlugin);
  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: "hello world",
        version: "1.0.0",
      },
      openapi: "3.1.0" satisfies ZodOpenApiVersion,
    },
    transform: fastifyZodOpenApiTransform,
    transformObject: fastifyZodOpenApiTransformObject,
  });
  await fastify.register(fastifySwaggerUI, {
    routePrefix: "/documentation",
  });

  // Carrega plugins (como instância do Prisma)
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: opts,
  });

  // Carrega rotas
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: opts,
  });
}
