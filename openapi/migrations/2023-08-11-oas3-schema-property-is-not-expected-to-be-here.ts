import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';
import options from '../../postman-to-openapi.json';

const url = options.additionalVars.instance_url.replace('https:', '');

traverse(spec, '', null, (value, key, parent) => {
  if (typeof key === 'string' && key === ' /v2/subscription/status/set') {
    parent['/v2/subscription/status/set '] = value;
    delete parent[key];
  }
});

writeSpec(spec);
