'use strict'

import path from 'node:path'
import AutoLoad from '@fastify/autoload'
import { FastifyInstance } from 'fastify'
import { validatorCompiler, serializerCompiler, fastifyZodOpenApiPlugin } from 'fastify-zod-openapi'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

export const options = {}

export default async function (fastify: FastifyInstance, opts: any) {
  // Configura Zod para validação e serialização
  fastify.setValidatorCompiler(validatorCompiler)
  fastify.setSerializerCompiler(serializerCompiler)

  // Registra o Swagger com suporte a OpenAPI 3
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Minha API com Fastify + Prisma + Zod',
        version: '1.0.0'
      }
    }
  })

  await fastify.register(swaggerUI)
  await fastify.register(fastifyZodOpenApiPlugin)

  // Carrega plugins (como instância do Prisma)
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: opts
  })

  // Carrega rotas
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: opts
  })
}
