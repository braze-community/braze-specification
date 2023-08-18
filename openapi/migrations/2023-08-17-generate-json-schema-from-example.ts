import { generateSchema } from 'json-schema-it';
import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key) => {
  const { example } = value;
  if (key === 'schema' && example) {
    Object.assign(value, generateSchema(example));
  }
});

writeSpec(spec);
