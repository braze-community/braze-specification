import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const should_inline_css = 'should_inline_css';

traverse(spec, '', null, (value, key, parent) => {
  // fix schema type
  if (
    key === 'name' &&
    value === should_inline_css &&
    parent.schema?.type === 'string'
  ) {
    parent.schema.type = 'boolean';
  }
});

writeSpec(spec);
