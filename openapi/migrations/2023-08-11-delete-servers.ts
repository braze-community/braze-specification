import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'servers') {
    delete parent.servers;
  }
});

writeSpec(spec);
