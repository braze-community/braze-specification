import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

/**
 * @see {@link https://github.com/braze-community/braze-php/issues/115}
 */
traverse(spec, '', null, (value, key, parent) => {
  if (value?.post && !value.post.responses[201]) {
    value.post.responses[201] = value.post.responses[200];
  }
});

writeSpec(spec);
