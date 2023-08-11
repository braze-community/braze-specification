import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

export async function writeCollection(collection: object) {
  const data = await prettier.format(JSON.stringify(collection), {
    parser: 'json',
  });
  fs.writeFileSync(path.resolve(__dirname, '../postman/collection.json'), data);
}
