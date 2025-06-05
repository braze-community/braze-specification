import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  switch (key) {
    case '/catalogs/{catalog_name}/items':
      delete getSchemaProperties(key, 'put', value).items.items.properties;
      value.delete.requestBody = value.patch.requestBody;
      break;

    case '/catalogs/{catalog_name}/items/{item_id}':
      ['patch', 'post', 'put'].forEach((method) => {
        delete getSchemaProperties(key, method, value).items.items.properties;
      });
      break;

    case '/users/track':
      delete getSchemaProperties(key, 'post', value).attributes.items
        .properties;
      delete getSchemaProperties(key, 'post', value).purchases.items.properties;
      break;
  }

  if (key === 'name' && value === 'phone') {
    parent.schema.type = 'string';
  }
});

function getSchemaProperties(key: string, method: string, value: any) {
  try {
    return value[method].requestBody.content['application/json'].schema
      .properties;
  } catch (error) {
    throw new Error(
      `Cannot read properties from key: ${key}, method: ${method}`,
    );
  }
}

writeSpec(spec);
