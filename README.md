<p align="center">
  <img height="150" src="https://d1wzvcwrgjaybe.cloudfront.net/repos/games/codenames-common-library/readme-category-icon.png">
  <img height="150" src="https://d1wzvcwrgjaybe.cloudfront.net/repos/games/codenames-common-library/readme-repo-icon.png">
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@manwaring-games/codenames-common">
    <img src="https://img.shields.io/npm/v/@manwaring-games/codenames-common/latest?style=flat-square&latest"></a>
  <a href="https://circleci.com/gh/manwaring-games/codenames-common-library">
    <img src="https://img.shields.io/circleci/build/github/manwaring-games/codenames-common-library?style=flat-square&token=39939fde42f2991bf714b41ba5976f2770b801e6&logo=circleci"></a>
  <a href="https://app.dependabot.com/accounts/manwaring-games/repos/261629125">
    <img src="https://img.shields.io/static/v1?label=dependabot&message=enabled&color=blue&logo=dependabot&style=flat-square"></a>
</p>

# Codenames common library

This repository contains TypeScript interfaces for the Codenames application, for use by both frontend and backend projects.

# Install

`npm i -S @manwaring-games/codenames-common`

# Local development

## Local setup prerequisites

1. **[CircleCI CLI](https://circleci.com/docs/2.0/local-cli/#installation)**: This project uses CircleCI for CI and publishing, and contains a Git hook (managed by [husky](https://www.npmjs.com/package/husky)) to validate the CircleCI config before committing. For you to commit changes you'll need to install the CLI.
1. **[Nodejs](https://nodejs.org/en/download/)**: I recommend using [nvm](https://github.com/nvm-sh/nvm) or something similar to manage Node versions locally. This project is developed and tested on the `lts` version, which as of inital package publishing is `12.16.3`.

## Steps to publish

1. Commit changes locally
1. Update package version (using [semantic versioning](https://semver.org/)) with the `npm version <version>` command and commit the updated `package.json` and `package-lock.json` files
1. Push all changes to GitHub
1. \*Create a new release in GitHub matching the new package version, prefixed with a `v` e.g. `v0.0.1`

\*Note that commiting to the main branch will trigger CI checks in CircleCI but won't initiate package publishing - only the creation of a new release in GitHub will initiate the CircleCI workflow to publish a new package.
