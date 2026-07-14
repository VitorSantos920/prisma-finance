import Fastify from 'fastify';

export const fastify = Fastify({
  logger: true,
});

fastify.get('/', (request, reply) => {
  reply.send({
    hello: 'word',
  });
});
