import Fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';


export default function (opts: FastifyPluginOptions) {
    const app: FastifyInstance = Fastify(opts)

    

    return app
}