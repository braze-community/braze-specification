import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';
import options from '../../postman-to-openapi.json';

const url = options.additionalVars.instance_url.replace('https:', '');

traverse(spec, '', null, (value, key, parent) => {
  if (typeof key === 'string' && key.startsWith(url)) {
    parent[key.replace(url, '')] = value;
    delete parent[key];
  }
});

writeSpec(spec);
