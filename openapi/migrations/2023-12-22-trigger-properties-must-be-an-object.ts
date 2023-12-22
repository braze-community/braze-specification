import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const TRIGGER_PROPERTIES = 'trigger_properties';

traverse(spec, '', null, (value, key, parent) => {
  if (key === TRIGGER_PROPERTIES && value === '') {
    parent[TRIGGER_PROPERTIES] = {};
  }

  if (key === TRIGGER_PROPERTIES && value?.type === 'string') {
    parent[TRIGGER_PROPERTIES].type = 'object';
  }
});

writeSpec(spec);
