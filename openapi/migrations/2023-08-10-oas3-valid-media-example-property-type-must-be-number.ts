import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'phone') {
    parent.schema.type = 'string';
  }
});

writeSpec(spec);
