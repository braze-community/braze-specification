import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const should_inline_css = 'should_inline_css';

traverse(spec, '', null, (value, key, parent) => {
  // delete default value since parameter is optional
  if (key === should_inline_css && value === false) {
    delete parent[should_inline_css];
  }
});

writeSpec(spec);
