import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === "List user's  subscription group status") {
    parent.name = "List user's subscription group status";
  }
});

writeCollection(collection);
