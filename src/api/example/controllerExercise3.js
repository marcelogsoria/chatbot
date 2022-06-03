/* eslint-disable no-empty */
module.exports = () => {
  const customers = {
    ['whatsapp:+5493874816610']: 'Marcelo Soria'
  };

  const answer = async (request, reply) => {
    //your answer here
  };

  //SOLUTION
/*   const answer = async (request, reply) => {
    reply
      .code(200)
      .send(`Hello ${customers[request.body.From] || 'customer'}!!`);
  }; */

  return {
    answer
  };
};
