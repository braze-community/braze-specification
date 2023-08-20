import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key !== 'name') {
    return;
  }

  switch (value) {
    case 'Create Catalog':
      return (parent.request.body = {
        mode: 'raw',
        raw: JSON.stringify(
          {
            catalogs: [
              {
                name: 'restaurants',
                description: 'My Restaurants',
                fields: [{ name: 'id', type: 'string' }],
              },
            ],
          },
          null,
          2,
        ),
      });

    case 'Create Multiple Catalog Items':
      return (parent.request.body = {
        mode: 'raw',
        raw: JSON.stringify(
          {
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
          },
          null,
          2,
        ),
      });

    case 'Edit Multiple Catalog Items':
      return (parent.request.body = {
        mode: 'raw',
        raw: JSON.stringify({ items: [{ id: 'restaurant1' }] }, null, 2),
      });
  }
});

writeCollection(collection);
