import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (children, key, parent) => {
  if (key === 'name' && children === 'phone') {
    parent.schema.type = 'string';
  }
});

writeSpec(spec);
