import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

/**
 * Schemas with "type: array", require a sibling "items" field
 *
 * - properties.audience.properties.AND
 * - properties.events
 * - properties.merge_updates
 */
traverse(spec, '', null, (value, key, parent) => {
  if (value instanceof Object && value.type === 'array' && !value.items) {
    value.items = { type: 'object' };
  }
});

writeSpec(spec);
