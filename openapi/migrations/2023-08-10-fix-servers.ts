import spec from '../spec.json';
import { traverse, writeSpec } from '../../utils';

traverse(spec, '', null, (value, key, parent) => {
  if (key === 'servers') {
    /**
     * @see https://www.braze.com/docs/api/basics#endpoints
     */
    parent[key] = [
      {
        url: 'https://rest.iad-01.braze.com',
        description: 'REST endpoint for instance US-01',
      },
      {
        url: 'https://rest.iad-01.braze.com',
        description: 'REST endpoint for instance US-01',
      },
      {
        url: 'https://rest.iad-02.braze.com',
        description: 'REST endpoint for instance US-02',
      },
      {
        url: 'https://rest.iad-03.braze.com',
        description: 'REST endpoint for instance US-03',
      },
      {
        url: 'https://rest.iad-04.braze.com',
        description: 'REST endpoint for instance US-04',
      },
      {
        url: 'https://rest.iad-05.braze.com',
        description: 'REST endpoint for instance US-05',
      },
      {
        url: 'https://rest.iad-06.braze.com',
        description: 'REST endpoint for instance US-06',
      },
      {
        url: 'https://rest.iad-08.braze.com',
        description: 'REST endpoint for instance US-08',
      },
      {
        url: 'https://rest.fra-01.braze.eu',
        description: 'REST endpoint for instance EU-01',
      },
      {
        url: 'https://rest.fra-02.braze.eu',
        description: 'REST endpoint for instance EU-02',
      },
    ];
  }
});

writeSpec(spec);
