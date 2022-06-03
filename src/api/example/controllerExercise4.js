/* eslint-disable no-empty */

/* 
Respond to twillio requests with “Hello xxxx!” as in the previous exercise, 
after that we should show a menu of the first 20 products in the CommerceTools project like: 

“Hello Lucas!,
we have this products for you:
1. T-Shirt 
2. Pants
3. Umbrella
…”
 */

module.exports = fastify => {
  const service = require('./service')(fastify);

  const customers = {
    ['whatsapp:+5493874816610']: 'Marcelo Soria'
  };

  const answer = async (request, reply) => {

    //Hint use a query like this in the service
    //const query = { expand: true, name: body.Body, page: 0, perPage: 10 };

    //Hint use \n as endline in the response message
  };

  //Solution:
/*  const answer = async (request, reply) => {
    const { body } = request;

    let responseMessage;

    const query = { expand: true, name: body.Body, page: 0, perPage: 10 };
    const products = await service.getProducts(query);
    const filteredProducts = products.results;

    const responseMessageLines = [
      `We have this products for you!`,
      ...filteredProducts.map(
        (product, index) => `${index + 1} - ${product.name.en}`
      )
    ];
    responseMessage = responseMessageLines.join('\n');

    reply
      .code(200)
      .send(
        `Hello ${
          customers[request.body.From] || 'customer'
        }!! \n${responseMessage}`
      );
  }; */


  return {
    answer
  };
};
