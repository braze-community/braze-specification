import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Edit Multiple Catalog Items') {
    const body = { items: [{ id: 'restaurant1' }] };

    parent.request.body = {
      mode: 'raw',
      raw: JSON.stringify(body, null, 2),
    };
  }
});

writeCollection(collection);
