import { FastifyInstance } from 'fastify'

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function (_request, _reply) {
    return 'this is an example'
  })
}
