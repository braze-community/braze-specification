import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Create Scheduled Messages') {
    delete parent.request.body.options;
  }
});

writeCollection(collection);
