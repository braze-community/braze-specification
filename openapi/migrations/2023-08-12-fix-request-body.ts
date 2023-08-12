import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

const WILDCARD = '*/*';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'requestBody' && value?.content?.[WILDCARD]) {
    const json = value.content[WILDCARD];
    json.schema.type = 'object';
    while (typeof json.schema.example === 'string') {
      json.schema.example = JSON.parse(json.schema.example);
    }
    parent[key].content = {
      'application/json': json,
    };
  }
});

writeSpec(spec);
