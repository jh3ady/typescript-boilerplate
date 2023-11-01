# TypeScript Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
![GitHub package.json version](https://img.shields.io/github/package-json/v/jh3ady/typescript-boilerplate?label=Version&style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/jh3ady/typescript-boilerplate?style=for-the-badge)
![GitHub Build Status](https://img.shields.io/github/actions/workflow/status/jh3ady/typescript-boilerplate/build.yml?style=for-the-badge)

A comprehensive TypeScript boilerplate providing a solid foundation for building scalable and maintainable applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributors](#contributors)
- [License](#license)

## Introduction

This TypeScript Boilerplate is designed to kickstart your project with a well-structured development environment. It includes tooling for building web applications, both on the frontend and backend, using TypeScript. The boilerplate is configured for modern development practices, such as automated testing, linting, and continuous integration.

## Features

- TypeScript support for both frontend and backend.
- Automated build and testing using Jest.
- Code formatting with Prettier and linting with ESLint.
- Git hooks with Husky to enforce code quality.
- Easy project setup and configuration.

## Getting Started

To get started with this TypeScript Boilerplate, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/jh3ady/typescript-boilerplate.git
   ```

2. Install project dependencies:

   ```sh
   bun install
   ```

3. Configure your project according to your needs.

4. Start coding your project!

## Usage

This boilerplate provides the following scripts to simplify your development workflow:

### Scripts

- `prepare`: Install Husky Git hooks.
- `build`: Build the project using TypeScript.
- `build:remove`: Remove the dist directory.
- `build:watch`: Watch for changes and rebuild the project.
- `test`: Run Jest tests.
- `test:watch`: Run Jest tests in watch mode.
- `test:coverage`: Run Jest tests and generate code coverage reports.
- `test:coverage:remove`: Remove the coverage directory.
- `format`: Format the code using Prettier.
- `format:check`: Check code formatting.
- `lint`: Lint the code using ESLint and fix issues.
- `lint:check`: Check for linting issues.

Please refer to the [package.json](package.json) for the most up-to-date script definitions.

## Contributors

- [Jean-Denis VIDOT](https://github.com/jh3ady/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
