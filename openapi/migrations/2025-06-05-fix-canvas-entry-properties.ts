import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const canvas_entry_properties = 'canvas_entry_properties';

/**
 * @see {@link https://github.com/braze-community/braze-php/issues/152}
 */
traverse(spec, '', null, (value, key, parent) => {
  if (key !== canvas_entry_properties) {
    return;
  }

  // `canvas_entry_properties` is an object
  if (typeof value === 'string') {
    parent[key] = {};
  } else if (value?.type === 'string' || value?.type === 'object') {
    parent[key] = { type: 'object' };
  }
});

writeSpec(spec);
