# Contributing

<details>
<summary>Table of Contents</summary>

- [Fork](#fork)
- [Install](#install)
- [Develop](#develop)
- [Build](#build)
- [Lint](#lint)
- [Release](#release)

</details>

Pull requests are welcome! By participating in this project, you agree to abide by our [code of conduct](https://github.com/braze-community/braze-specification?tab=coc-ov-file).

## Fork

[Fork](https://github.com/braze-community/braze-specification/fork) and then clone the repository:

```sh
# replace <USER> with your username
git clone git@github.com:<USER>/braze-specification.git
```

```sh
cd braze-specification
```

## Install

Set the Node.js version with [nvm](https://github.com/nvm-sh/nvm#intro):

```sh
nvm use
```

Install the dependencies:

```sh
npm install
```

## Develop

Check if [collection.json](postman/collection.json) is up-to-date with the [Postman collection](https://documenter.getpostman.com/view/4689407/SVYrsdsG).

If a field is incorrect, write a migration in either:

- [postman/migrations](postman/migrations/)
- [openapi/migrations](openapi/migrations/)

Run the migrations and generate the spec:

```sh
npm run build
```

You can also run each command separately:

```sh
npm run migrations:postman
```

```sh
npm run postman-to-openapi
```

```sh
npm run migrations:openapi
```

Lint OpenAPI spec:

```sh
npm run lint
```

Write a commit message that follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Add missing tests or correct existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Updates configuration files and scripts for continuous integration
- **docs**: Documentation only changes

The commit message will be linted during the pre-commit Git hook. To manually lint the most recent commit message:

```sh
git log -1 --pretty=format:"%s" | npx commitlint
```

Push to your fork and create a [pull request](https://github.com/remarkablemark/html-react-parser/compare/).

At this point, wait for us to review your pull request. We'll try to review pull requests within 1-3 business days. We may suggest changes, improvements, and/or alternatives.

Things that will improve the chance that your pull request will be accepted:

- [ ] Write tests that pass [CI](https://github.com/braze-community/braze-specification/actions/workflows/build.yml).
- [ ] Write solid documentation.
- [ ] Write a good [commit message](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit).

## Build

Run Postman migrations:

```sh
npm run migrations:postman
```

Generate OpenAPI spec from Postman collection:

```sh
npm run postman-to-openapi
```

Run OpenAPI migrations:

```sh
npm run migrations:openapi
```

## Lint

Check for OpenAPI spec failures:

```sh
npm run lint
```

Check for TypeScript errors:

```sh
npm run lint:tsc
```

## Release

Release and publish are automated with [Release Please](https://github.com/googleapis/release-please).
