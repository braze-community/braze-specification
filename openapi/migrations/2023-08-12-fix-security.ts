import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'security') {
    delete parent[key];
  }
});

/**
 * @see https://swagger.io/docs/specification/authentication/bearer-authentication/
 */
const SECURITY_SCHEME = 'BearerAuth';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'securitySchemes') {
    delete parent[key];
    parent[key] = {
      [SECURITY_SCHEME]: {
        type: 'http',
        scheme: 'bearer',
      },
    };
  }
});

// @ts-ignore
spec.security = [{ [SECURITY_SCHEME]: [] }];

writeSpec(spec);
