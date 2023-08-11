// @ts-nocheck
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import collection from '../collection.json';

const catalogs = collection.item.find(({ name }) => name === 'Catalogs');

const catalogManagement = catalogs.item.find(
  ({ name }: { name: string }) => name === 'Catalog Items',
);

const asynchronous = catalogManagement.item.find(
  ({ name }) => name === 'Asynchronous',
);

const editMultipleCatalogItems = asynchronous.item.find(
  ({ name }) => name === 'Edit Multiple Catalog Items',
);

const body = { items: [{ id: 'restaurant1' }] };

editMultipleCatalogItems.request.body = {
  mode: 'raw',
  raw: JSON.stringify(body, null, 2),
};

prettier
  .format(JSON.stringify(collection), { parser: 'json' })
  .then((data) =>
    fs.writeFileSync(path.resolve(__dirname, '../collection.json'), data),
  );
