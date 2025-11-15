# Changelog

## [1.3.11](https://github.com/braze-community/braze-specification/compare/v1.3.10...v1.3.11) (2025-11-15)


### Documentation

* **readme:** update disclaimer ([002a0b6](https://github.com/braze-community/braze-specification/commit/002a0b6d4f37cef5173cea194d5c44498d27a953))

## [1.3.10](https://github.com/braze-community/braze-specification/compare/v1.3.9...v1.3.10) (2025-06-07)


### Bug Fixes

* **postman:** fix messages type in /messages/send ([4edbbd1](https://github.com/braze-community/braze-specification/commit/4edbbd1b01b70b7a78cdb870a70d3a8a1949a4ef))

## [1.3.9](https://github.com/braze-community/braze-specification/compare/v1.3.8...v1.3.9) (2025-06-06)


### Bug Fixes

* **postman:** correct external_user_ids type in /messages/send ([2304574](https://github.com/braze-community/braze-specification/commit/230457451675b0d2f8631e24fc1071204cb7367e))

## [1.3.8](https://github.com/braze-community/braze-specification/compare/v1.3.7...v1.3.8) (2025-06-06)


### Bug Fixes

* **postman:** fix external_user_ids in 2023-08-12-fix-request-body ([b635f1d](https://github.com/braze-community/braze-specification/commit/b635f1d59beea6c5b86d1401df9654aa6c5323c5))

## [1.3.7](https://github.com/braze-community/braze-specification/compare/v1.3.6...v1.3.7) (2025-06-06)


### Bug Fixes

* **postman:** fix `/users/identify` request body ([440748c](https://github.com/braze-community/braze-specification/commit/440748c7abd6a95454be65aa445e6ec58d2e5d75))

## [1.3.6](https://github.com/braze-community/braze-specification/compare/v1.3.5...v1.3.6) (2025-06-06)


### Bug Fixes

* **postman:** fix item name and merge subscription groups ([dc94266](https://github.com/braze-community/braze-specification/commit/dc94266f8a4f5f666dd6c99151e53840493a63a9))

## [1.3.5](https://github.com/braze-community/braze-specification/compare/v1.3.4...v1.3.5) (2025-06-05)


### Bug Fixes

* **openapi:** add requestBody to DELETE `/catalogs/{catalog_name}/items` ([69e295d](https://github.com/braze-community/braze-specification/commit/69e295dbefdd76aa33fb0c89ba51111df9368309))

## [1.3.4](https://github.com/braze-community/braze-specification/compare/v1.3.3...v1.3.4) (2025-06-05)


### Bug Fixes

* **openapi:** change `canvas_entry_properties` type from string to object ([cdfc230](https://github.com/braze-community/braze-specification/commit/cdfc230fc9282e20bed5fb8e6950b65645d91e8d))

## [1.3.3](https://github.com/braze-community/braze-specification/compare/v1.3.2...v1.3.3) (2025-06-04)


### Bug Fixes

* **openapi:** correct schema type of `should_inline_css` ([c1bf67a](https://github.com/braze-community/braze-specification/commit/c1bf67a06ff90098ba4c6c19084fccea68d5479e))

## [1.3.2](https://github.com/braze-community/braze-specification/compare/v1.3.1...v1.3.2) (2025-06-04)


### Bug Fixes

* **openapi:** don't set default value for `should_inline_css` ([df3b945](https://github.com/braze-community/braze-specification/commit/df3b9455769f9100b2f35c239d04b5627742abf7))

## [1.3.1](https://github.com/braze-community/braze-specification/compare/v1.3.0...v1.3.1) (2025-06-04)


### Bug Fixes

* **postman:** fix migrations and regenerate openapi spec ([b5e74aa](https://github.com/braze-community/braze-specification/commit/b5e74aa04c5483ff72e903818645e419adb7372c))

## [1.3.0](https://github.com/braze-community/braze-specification/compare/v1.2.4...v1.3.0) (2025-06-04)


### Features

* **postman:** update latest collection ([0c62d12](https://github.com/braze-community/braze-specification/commit/0c62d12393d94dc110b74cd06674f2204fe7df70))


### Bug Fixes

* **openapi:** add migration to remove redundant path in spec ([decedad](https://github.com/braze-community/braze-specification/commit/decedad701d8eeefd4486acc57a0645f7de37062))
* **openapi:** update spec.json ([6fd00a4](https://github.com/braze-community/braze-specification/commit/6fd00a4e1b70d070c93d4057873da079730028ee))
* **postman:** fix invalid JSON in migration 2023-08-12-fix-request-body ([d26eaed](https://github.com/braze-community/braze-specification/commit/d26eaed5c7c9b096e7a4e9c1de79323749ff6c61))
* **postman:** run migrations on collection.json ([bcc02ad](https://github.com/braze-community/braze-specification/commit/bcc02ad465b2e1dd84a32eaa4bc515f50b4d4cfc))

## [1.2.4](https://github.com/braze-community/braze-specification/compare/v1.2.3...v1.2.4) (2024-10-14)


### Bug Fixes

* **openapi:** create migration to add POST response 201 ([780dd78](https://github.com/braze-community/braze-specification/commit/780dd78d9404ecf6a6d940ce40c545d036f083b1))

## [1.2.3](https://github.com/braze-community/braze-specification/compare/v1.2.2...v1.2.3) (2024-10-09)


### Continuous Integration

* **github:** publish package to npm registry with provenance ([f8b624c](https://github.com/braze-community/braze-specification/commit/f8b624c71d090be39d9fcc8c76789b338441223d))

## [1.2.2](https://github.com/braze-community/braze-specification/compare/v1.2.1...v1.2.2) (2024-10-09)

### Bug Fixes

- **openapi:** add migration to fix spectral array-items lint error ([509c472](https://github.com/braze-community/braze-specification/pull/119/commits/509c472e7e98a75eb2221fdf1b452ff60eeed293)), closes [#119](https://github.com/braze-community/braze-specification/pull/119)

## [1.2.1](https://github.com/braze-community/braze-specification/compare/v1.2.0...v1.2.1) (2023-12-22)

### Bug Fixes

- **openapi:** add migration to change 'trigger_properties' to object ([4287496](https://github.com/braze-community/braze-specification/commit/4287496ed8b538f0895641f82e1ef5a54b59edb6))

## [1.2.0](https://github.com/braze-community/braze-specification/compare/v1.1.1...v1.2.0) (2023-08-20)

### Features

- **openapi:** add additional string format to spec.json ([6f725a6](https://github.com/braze-community/braze-specification/commit/6f725a66609b43ea6cb3239f7d52a5c65036d149))

## [1.1.1](https://github.com/braze-community/braze-specification/compare/v1.1.0...v1.1.1) (2023-08-19)

### Bug Fixes

- **openapi:** update migration to fix JSON Schema ([112f5a3](https://github.com/braze-community/braze-specification/commit/112f5a31873ee49dfff882f713014c37f5423196))

## [1.1.0](https://github.com/braze-community/braze-specification/compare/v1.0.1...v1.1.0) (2023-08-18)

### Features

- **openapi:** add migration to generate JSON Schema from example ([482213a](https://github.com/braze-community/braze-specification/commit/482213ae177abc711462432d68cbc612f5261530))

### Bug Fixes

- **openapi:** add migration to fix catalogs JSON Schema ([9ad049d](https://github.com/braze-community/braze-specification/commit/9ad049dca83edab9cac3471537e5aeb2fde576dc))

## [1.0.1](https://github.com/braze-community/braze-specification/compare/v1.0.0...v1.0.1) (2023-08-13)

### Bug Fixes

- **openapi:** add migration to fix security scheme ([3613805](https://github.com/braze-community/braze-specification/commit/3613805165d3b9f9acb1e345b9d7987d7d877e38))
- **openapi:** add migration to fix servers ([725f4a8](https://github.com/braze-community/braze-specification/commit/725f4a8be731dc58741335cab1b7247101e9625e))
- **openapi:** add migrations to fix request body ([81efba7](https://github.com/braze-community/braze-specification/commit/81efba7558728becc26cd3a35f0595abec9620b3))
- **openapi:** create migration to add responses ([c946354](https://github.com/braze-community/braze-specification/commit/c9463541e2348d7d87e18fdc3822a1570fea2e0b))
- **postman:** add migration to delete duplicate url ([29c9d9d](https://github.com/braze-community/braze-specification/commit/29c9d9d3d4b741d79396437e299d784bf1bd4ccb))

## 1.0.0 (2023-08-11)

### Features

- **openapi:** add migration to change to relative urls in spec.json ([5664b8b](https://github.com/braze-community/braze-specification/commit/5664b8bb8637dd83d5d36ea458fde79a7f5bf723))
- **openapi:** add migration to delete servers ([46681d0](https://github.com/braze-community/braze-specification/commit/46681d00f5cb7160044cc1c934fbe84e9ba4b494))
- **openapi:** create spec.json ([6959bd4](https://github.com/braze-community/braze-specification/commit/6959bd4cbd2ef9aff39e435c0804b4ac7efbb474))
- **postman:** add migrations ([3817591](https://github.com/braze-community/braze-specification/commit/38175911c984a27e103d9ae829e49adf3b3c0db7))
- **postman:** add migrations ([ba6aa2f](https://github.com/braze-community/braze-specification/commit/ba6aa2f131cd1f923e35046f6c24c23f955c756e))
- **postman:** create collection.json ([fa99c9b](https://github.com/braze-community/braze-specification/commit/fa99c9b6db32ddb08bddbe78b93aabfa2f31dbe9))
- **postman:** create migrations ([2c28d10](https://github.com/braze-community/braze-specification/commit/2c28d1069117499b9d96f2a6ef2592d2ed78514b))

### Bug Fixes

- **openapi:** add migration to fix oas3-schema ([f834001](https://github.com/braze-community/braze-specification/commit/f834001a718792852629bc721ae8a819193ade9c))
- **openapi:** add migration to fix oas3-valid-media-example number ([aac84f2](https://github.com/braze-community/braze-specification/commit/aac84f2910b00a728298b954741a60b4e7f50c29))
- **openapi:** add request body for PATCH /catalogs/{catalog_name}/items ([05689fe](https://github.com/braze-community/braze-specification/commit/05689fe225eaa4ec349a56cbcfba347d2831c888))
- **openapi:** add request body for POST /catalogs ([9b855ee](https://github.com/braze-community/braze-specification/commit/9b855ee7f9b5db1fce7fe0ef79ec19e6a6f4ee92))
- **openapi:** add request body for POST /catalogs/{catalog_name}/items ([c6ed17f](https://github.com/braze-community/braze-specification/commit/c6ed17f6f7b77b3d1e0396b12e748e9fbe3f2db7))
- **postman:** add migration to fix oas3-valid-media-example boolean ([41311f1](https://github.com/braze-community/braze-specification/commit/41311f1a19742f244480e87e63135169d947ed16))
- **postman:** add migration to fix oas3-valid-media-example integer ([4b25a98](https://github.com/braze-community/braze-specification/commit/4b25a98edf48eb3368f3fc1982ed6217776417d8))
- **postman:** add migration to fix oas3-valid-media-example object ([2aa43c8](https://github.com/braze-community/braze-specification/commit/2aa43c8c3801c50fdd028649d229cd0f4160dac9))
