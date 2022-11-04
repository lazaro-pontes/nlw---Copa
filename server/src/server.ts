import Fastify from 'fastify'

async function start() {
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/bolao/contagem', () => {
        return { count: 0 }
    })

    await fastify.listen({ port: 3333 })
}

start()