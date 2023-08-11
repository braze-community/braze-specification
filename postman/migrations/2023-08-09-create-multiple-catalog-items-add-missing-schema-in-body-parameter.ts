import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Create Multiple Catalog Items') {
    const body = {
      items: [
        {
          id: 'restaurant1',
          Name: 'Restaurant1',
          City: 'New York',
          Cuisine: 'American',
          Rating: 5,
          Loyalty_Program: true,
          Created_At: '2022-11-01T09:03:19.967+00:00',
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
