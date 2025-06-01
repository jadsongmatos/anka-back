import { FastifyInstance } from 'fastify'

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function (_request, _reply) {
    return { root: true }
  })
}
