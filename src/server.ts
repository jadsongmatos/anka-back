import Fastify from 'fastify'
import App from './app'

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;
const FASTIFY_HOST = process.env.FASTIFY_HOST || '0.0.0.0' ;

async function startServer() {
  const fastify = Fastify({
    logger: true
  })

  try {
    await fastify.register(App, {})

    // Inicia o servidor
    await fastify.listen({ port: FASTIFY_PORT, host: FASTIFY_HOST })

    console.log(`🚀  Fastify server running on port http://${FASTIFY_HOST}:${FASTIFY_PORT}`);
    console.log(`📚 Documentação Swagger: http://${FASTIFY_HOST}:${FASTIFY_PORT}/documentation`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

startServer()