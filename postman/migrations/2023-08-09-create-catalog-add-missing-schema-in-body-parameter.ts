// @ts-nocheck
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import collection from '../collection.json';

const catalogs = collection.item.find(({ name }) => name === 'Catalogs');

const catalogManagement = catalogs.item.find(
  ({ name }: { name: string }) => name === 'Catalog Management',
);

const synchronous = catalogManagement.item.find(
  ({ name }) => name === 'Synchronous',
);

const createCatalog = synchronous.item.find(
  ({ name }) => name === 'Create Catalog',
);

const body = {
  catalogs: [
    {
      name: 'restaurants',
      description: 'My Restaurants',
      fields: [{ name: 'id', type: 'string' }],
    },
  ],
};

createCatalog.request.body = {
  mode: 'raw',
  raw: JSON.stringify(body, null, 2),
};

prettier
  .format(JSON.stringify(collection), { parser: 'json' })
  .then((data) =>
    fs.writeFileSync(path.resolve(__dirname, '../collection.json'), data),
  );
