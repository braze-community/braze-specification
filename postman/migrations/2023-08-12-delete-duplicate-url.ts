import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (
    key === 'name' &&
    parent.request?.url?.raw ===
      'https://{{instance_url}} /v2/subscription/status/set'
  ) {
    Object.keys(parent).forEach((key) => {
      delete parent[key];
    });
  }
});

writeCollection(collection);
