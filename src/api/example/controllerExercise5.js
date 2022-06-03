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
    const { body } = request;

    let responseMessage;

    const query = { expand: true, name: body.Body, page: 0, perPage: 10 };
    const products = await service.getProducts(query);
    const filteredProducts = products.results;

    let responseMessageLines;

    if (!isNaN(parseInt(body.Body))) {
      const selectedProduct = filteredProducts[parseInt(body.Body) - 1];
      const variants = [
        selectedProduct.masterVariant,
        ...selectedProduct.variants
      ];

      const variantAsText = variants.map((variant, index) => {
        const color = variant.attributes.find(
          attribute => attribute.name === 'color'
        )?.value?.label?.en;

        const size = variant.attributes.find(
          attribute => attribute.name === 'commonSize'
        )?.value?.label;
        const price = variant.prices?.[0]?.value.centAmount;

        return `A${index + 1}. ${color} ${size} - $ ${price / 100}`;
      });

      responseMessageLines = [
        `Choose the right ${selectedProduct.name.en} for you!`,
        ...variantAsText
      ];
    } else {
      responseMessageLines = [
        `We have this products for you!`,
        ...filteredProducts.map(
          (product, index) => `${index + 1} - ${product.name.en}`
        )
      ];
    }

    responseMessage = responseMessageLines.join('\n');

    reply
      .code(200)
      .send(
        `Hello ${
          customers[request.body.From] || 'customer'
        }!! \n${responseMessage}`
      );
  };

  return {
    answer
  };
};
