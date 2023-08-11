# braze-specification

[![NPM](https://nodei.co/npm/braze-specification.png)](https://nodei.co/npm/braze-specification/)

[![NPM version](https://img.shields.io/npm/v/braze-specification.svg)](https://www.npmjs.com/package/braze-specification)
[![build](https://github.com/braze-community/braze-specification/actions/workflows/build.yml/badge.svg)](https://github.com/braze-community/braze-specification/actions/workflows/build.yml)
[![commitlint](https://github.com/braze-community/braze-specification/actions/workflows/commitlint.yml/badge.svg)](https://github.com/braze-community/braze-specification/actions/workflows/commitlint.yml)
[![lint](https://github.com/braze-community/braze-specification/actions/workflows/lint.yml/badge.svg)](https://github.com/braze-community/braze-specification/actions/workflows/lint.yml)

Braze API specification. See [Postman collection](https://documenter.getpostman.com/view/4689407/SVYrsdsG).

- [openapi/spec.json](https://github.com/braze-community/braze-specification/blob/master/openapi/spec.json)
- [postman.collection.json](https://github.com/braze-community/braze-specification/blob/master/postman/collection.json)

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

## License

[MIT](https://github.com/braze-community/braze-specification/blob/master/LICENSE)
