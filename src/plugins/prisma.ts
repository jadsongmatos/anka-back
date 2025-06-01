"use strict";

import fp from "fastify-plugin";
import { PrismaClient } from "../../generated/prisma";

export default fp(async (fastify) => {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
  await prisma.$connect();

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async (fastifyInstance) => {
    await fastifyInstance.prisma.$disconnect();
  });
});

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}
