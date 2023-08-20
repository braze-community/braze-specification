import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

const NUMERIC_REGEX = /^\d+$/;

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Create Scheduled Messages') {
    delete parent.request.body.options;
  }

  if (key === 'value') {
    switch (value) {
      case 'true':
        parent[key] = true;
        break;
      case 'false':
        parent[key] = false;
        break;
      default:
        if (NUMERIC_REGEX.test(value)) {
          parent[key] = parseInt(value, 10);
        }
        break;
    }
  }
});

writeCollection(collection);
