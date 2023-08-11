import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

const regex = /^\d+$/;

traverse(collection, '', null, (children, key, parent) => {
  if (key === 'value' && regex.test(children)) {
    parent[key] = parseInt(children, 10);
  }
});

writeCollection(collection);
