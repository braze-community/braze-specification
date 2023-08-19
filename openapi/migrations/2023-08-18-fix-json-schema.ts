import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key) => {
  switch (key) {
    case '/catalogs/{catalog_name}/items':
      ['post', 'put'].forEach((method) => {
        delete getSchemaProperties(value[method]).items.items.properties;
      });
      break;

    case '/catalogs/{catalog_name}/items/{item_id}':
      ['patch', 'post', 'put'].forEach((method) => {
        delete getSchemaProperties(value[method]).items.items.properties;
      });
      break;

    case '/users/track':
      ['post'].forEach((method) => {
        delete getSchemaProperties(value[method]).attributes.items.properties;
        delete getSchemaProperties(value[method]).purchases.items.properties;
      });
      break;
  }
});

function getSchemaProperties(obj: any) {
  return obj.requestBody.content['application/json'].schema.properties;
}

writeSpec(spec);
