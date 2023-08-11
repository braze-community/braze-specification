// @ts-nocheck
import collection from '../collection.json';
import { writeCollection } from '../../utils';

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

writeCollection(collection);
