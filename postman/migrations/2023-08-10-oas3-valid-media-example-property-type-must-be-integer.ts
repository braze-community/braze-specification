import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

const regex = /^\d+$/;

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'value' && regex.test(value)) {
    parent[key] = parseInt(value, 10);
  }
});

writeCollection(collection);
