import * as costatus from 'costatus';
import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const APPLICATION_JSON = 'application/json';

traverse(spec, '', null, (response, key) => {
  if (key === 'responses') {
    const success = response[costatus.OK].content[APPLICATION_JSON];

    if (!success.schema) {
      success.schema = { type: 'object' };
    }

    response[costatus.BAD_REQUEST] = {
      $ref: '#/components/responses/BadRequest',
    };

    response[costatus.UNAUTHORIZED] = {
      $ref: '#/components/responses/Unauthorized',
    };

    response[costatus.FORBIDDEN] = {
      $ref: '#/components/responses/Forbidden',
    };

    response[costatus.NOT_FOUND] = {
      $ref: '#/components/responses/NotFound',
    };

    response[costatus.TOO_MANY_REQUESTS] = {
      $ref: '#/components/responses/TooManyRequests',
    };

    response[costatus.INTERNAL_SERVER_ERROR] = {
      $ref: '#/components/responses/InternalServerError',
    };
  }
});

// @ts-ignore
spec.components.responses = {
  BadRequest: createErrorResponse('400 Bad Request'),
  Unauthorized: createErrorResponse('401 Unauthorized'),
  Forbidden: createErrorResponse('403 Forbidden'),
  NotFound: createErrorResponse('404 Not Found'),
  TooManyRequests: createErrorResponse('429 Rate Limited'),
  InternalServerError: createErrorResponse('500 Internal Server Error'),
};

// @ts-ignore
spec.components.schemas = {
  Error: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      errors: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

/**
 * @see https://www.braze.com/docs/api/errors/#fatal-errors
 */
function createErrorResponse(description: string) {
  return {
    description,
    content: {
      [APPLICATION_JSON]: {
        schema: {
          $ref: `#/components/schemas/Error`,
        },
      },
    },
  };
}

writeSpec(spec);
