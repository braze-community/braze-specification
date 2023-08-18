import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key) => {
  if (key === '/catalogs/{catalog_name}/items') {
    ['post', 'put'].forEach((method) => {
      deleteSchemaProperties(value[method]);
    });
  }

  if (key === '/catalogs/{catalog_name}/items/{item_id}') {
    ['patch', 'post', 'put'].forEach((method) => {
      deleteSchemaProperties(value[method]);
    });
  }
});

function deleteSchemaProperties(obj: any) {
  delete obj.requestBody.content['application/json'].schema.properties.items
    .items.properties;
}

writeSpec(spec);
