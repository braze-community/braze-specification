import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  switch (key) {
    case '/catalogs/{catalog_name}/items':
      ['put'].forEach((method) => {
        delete getSchemaProperties(key, method, value).items.items.properties;
      });
      break;

    case '/catalogs/{catalog_name}/items/{item_id}':
      ['patch', 'post', 'put'].forEach((method) => {
        delete getSchemaProperties(key, method, value).items.items.properties;
      });
      break;

    case '/users/track':
      ['post'].forEach((method) => {
        delete getSchemaProperties(key, method, value).attributes.items
          .properties;
        delete getSchemaProperties(key, method, value).purchases.items
          .properties;
      });
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
