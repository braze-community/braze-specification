import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (children, key, parent) => {
  if (key === 'value') {
    switch (children) {
      case 'true':
        parent[key] = true;
        break;
      case 'false':
        parent[key] = false;
        break;
    }
  }
});

writeCollection(collection);
