const {
  product: { product }
} = require('commercetools-entities-schemas');

const errorResponse = {
  type: 'object',
  properties: {
    errors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'unique identifier for this particular occurrence of the problem'
          },
          code: {
            type: 'string',
            enum: ['001'],
            description: `> an internal specific error code:
             - 001: Request schema validation error
             
             `
          },
          status: {
            type: 'string',
            description: 'the HTTP status code applicable to this problem'
          },
          title: {
            type: 'string',
            description: 'a short, human-readable summary of the problem'
          },
          detail: {
            type: 'string',
            description: 'a human-readable explanation'
          },
          meta: {
            type: 'object',
            description:
              'a meta object containing non-standard meta-information',
            additionalProperties: true
          }
        },
        required: ['status']
      }
    }
  },
  required: ['errors']
};

const defaultResponse = {
  '4XX': {
    description: 'Client Error',
    ...errorResponse
  },
  '5XX': {
    description: 'Internal Server Error',
    ...errorResponse
  }
};

const methodSchema = {
  title: 'Method example',
  description: 'Method example descriptions',
  operationId: 'MethodExample',
  tags: ['private', 'public'],
  querystring: {
    type: 'object',
    properties: {
      queryOne: { type: 'string' },
      queryTwo: { type: 'string' }
    },
    required: ['queryOne']
  },

  response: {
    200: {
      type: 'object',
      description: 'Method response example',
      properties: {
        queryOne: { type: 'string' },
        queryTwo: { type: 'string' }
      },
      required: ['queryOne']
    },
    ...defaultResponse
  }
};

const methodCTSchema = {
  title: 'Method with ct request example',
  description: 'Method example descriptions',
  operationId: 'MethodCTExample',
  tags: ['private', 'public'],
  querystring: {
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
    //required: ['name']
  },

  response: {
    200: {
      type: 'object',
      description: 'Method response example',
      items: product,
      additionalProperties: true
    },
    ...defaultResponse
  }
};

const twillioAnswer = {
  title: 'Method with twillio answer',
  description: 'Method example descriptions',
  operationId: 'MethodTwillioAnswer',
  tags: ['private', 'public'],
  querystring: {
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  },

  response: {
    200: {
      type: 'object',
      description: 'Method response example',
      items: product,
      additionalProperties: true
    },
    ...defaultResponse
  }
};

module.exports = {
  methodSchema,
  methodCTSchema,
  twillioAnswer
};
