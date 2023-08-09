#!/bin/bash

mkdir -p openapi
npx p2o postman/collection.json --file openapi/spec.json --options scripts/options.json
