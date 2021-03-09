const fastify = require('fastify')()

fastify.register(require('fastify-cors'), { 
  origin: '*',
  methods: 'GET',
})

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000)
