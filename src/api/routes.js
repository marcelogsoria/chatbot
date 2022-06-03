const schema = require('./example/schema');
//UNCOMMENT IF JWT AUTH IS REQUIRED
//const injectJwtAuth = require('../plugins/inject-jwt-auth');

module.exports = async fastify => {
  //UNCOMMENT IF JWT AUTH IS REQUIRED
  //fastify.register(injectJwtAuth);

  const controllerExercise1 = require('./example/controllerExercise1')(fastify);
  const controllerExercise2 = require('./example/controllerExercise2')(fastify);
  const controllerExercise3 = require('./example/controllerExercise3')(fastify);
  const controllerExercise4 = require('./example/controllerExercise4')(fastify);
  const controllerExercise5 = require('./example/controllerExercise5')(fastify);
  
  fastify.route({
    method: 'POST',
    url: '/exercise1/answer',
    schema: schema.twillioAnswer,
    handler: controllerExercise1.answer
  });

  fastify.route({
    method: 'POST',
    url: '/exercise2/answer',
    schema: schema.twillioAnswer,
    handler: controllerExercise2.answer
  });

  fastify.route({
    method: 'POST',
    url: '/exercise3/answer',
    schema: schema.twillioAnswer,
    handler: controllerExercise3.answer
  });

  fastify.route({
    method: 'POST',
    url: '/exercise4/answer',
    schema: schema.twillioAnswer,
    handler: controllerExercise4.answer
  });

  fastify.route({
    method: 'POST',
    url: '/exercise5/answer',
    schema: schema.twillioAnswer,
    handler: controllerExercise5.answer
  });
};
