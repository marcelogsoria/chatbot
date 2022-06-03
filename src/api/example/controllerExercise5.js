/* eslint-disable no-empty */

/* 

Once the user selects a product, we should show the variants and prices, like this:
Hint: the user always selects an integer from the previous exercise
“Please choose the right T-Shirt alternative for you!
A1. Yellow XL - $ 50
A2. Green L - $ 54
A3. Black M - $ 62
A4. Yellow L - $ 53
…”

 */

module.exports = fastify => {
  const service = require('./service')(fastify);

  const customers = {
    ['whatsapp:+5493874816610']: 'Marcelo Soria'
  };

  const answer = async (request, reply) => {

    //if the user send an integet
      //offer variants
    //othwerwise
      //offer products like exercise 4
  };

  return {
    answer
  };
};
