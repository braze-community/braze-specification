import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Create Catalog') {
    const body = {
      catalogs: [
        {
          name: 'restaurants',
          description: 'My Restaurants',
          fields: [{ name: 'id', type: 'string' }],
        },
      ],
    };

    parent.request.body = {
      mode: 'raw',
      raw: JSON.stringify(body, null, 2),
    };
  }
});

writeCollection(collection);
