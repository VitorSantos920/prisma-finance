import { fastify } from './app.js';
const port = Number(process.env.PORT ?? 3000);

const start = async () => {
  try {
    await fastify.listen({ port: port, host: '127.0.0.1' });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
