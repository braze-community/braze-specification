import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

/**
 * Write Postman collection to JSON file.
 */
export async function writeCollection(collection: object) {
  const data = await prettier.format(JSON.stringify(collection), {
    parser: 'json',
  });
  fs.writeFileSync(path.resolve(__dirname, '../postman/collection.json'), data);
}

/**
 * Write OpenAPI spec to JSON file.
 */
export async function writeSpec(spec: object) {
  const data = await prettier.format(JSON.stringify(spec), {
    parser: 'json',
  });
  fs.writeFileSync(path.resolve(__dirname, '../openapi/spec.json'), data);
}
