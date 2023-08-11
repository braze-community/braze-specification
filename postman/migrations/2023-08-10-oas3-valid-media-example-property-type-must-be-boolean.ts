// @ts-nocheck
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import collection from '../collection.json';
import { traverse } from '../../utils';

traverse(collection, undefined, undefined, (children, key, parent) => {
  if (key === 'value') {
    switch (children) {
      case 'true':
        parent[key] = true;
        break;
      case 'false':
        parent[key] = false;
        break;
    }
  }
});

prettier
  .format(JSON.stringify(collection), { parser: 'json' })
  .then((data) =>
    fs.writeFileSync(path.resolve(__dirname, '../collection.json'), data),
  );
