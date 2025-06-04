import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  // delete redundant path
  if (key === ' /v2/subscription/status/set' && parent[key.trim()]) {
    delete parent[key];
  }
});

writeSpec(spec);
