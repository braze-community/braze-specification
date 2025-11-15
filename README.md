# braze-specification

[![NPM](https://nodei.co/npm/braze-specification.png)](https://nodei.co/npm/braze-specification/)

[![NPM version](https://img.shields.io/npm/v/braze-specification.svg)](https://www.npmjs.com/package/braze-specification)
[![build](https://github.com/braze-community/braze-specification/actions/workflows/build.yml/badge.svg)](https://github.com/braze-community/braze-specification/actions/workflows/build.yml)
[![lint](https://github.com/braze-community/braze-specification/actions/workflows/lint.yml/badge.svg)](https://github.com/braze-community/braze-specification/actions/workflows/lint.yml)

Braze API specification:

- [OpenAPI spec](https://github.com/braze-community/braze-specification/blob/master/openapi/spec.json)
- [Postman collection](https://github.com/braze-community/braze-specification/blob/master/postman/collection.json)

See the original [Postman collection](https://documenter.getpostman.com/view/4689407/SVYrsdsG).

> [!NOTE]
> _Disclaimer:_ This is a community-maintained project and is not officially endorsed by or affiliated with Braze, Inc.

## Installation

[NPM](https://www.npmjs.com/package/braze-specification):

```sh
npm install braze-specification
```

[Yarn](https://yarnpkg.com/package/braze-specification):

```sh
yarn add braze-specification
```

## Usage

Require OpenAPI spec and Postman collection with CommonJS:

```ts
const spec = require('braze-specification/openapi/spec.json');
const collection = require('braze-specification/postman/collection.json');
```

Or import OpenAPI spec and Postman collection with ES Modules:

```ts
import spec from 'braze-specification/openapi/spec.json';
import collection from 'braze-specification/postman/collection.json';
```

## Contributing

See [contributing](https://github.com/braze-community/braze-specification?tab=contributing-ov-file).

## License

[MIT](https://github.com/braze-community/braze-specification/blob/master/LICENSE)

Braze is a registered trademark of Braze, Inc. This project is not managed by Braze, Inc.
