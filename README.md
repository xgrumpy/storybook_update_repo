# Proxie TS

This is a [Next.js](https://nextjs.org/) project.

It contains API endpoints and the Proxie Web frontend.

## Getting Started

First, run the development server:

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000).

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Docker

You can use docker to build, run and deploy the application

```
docker build -f -t proxie-ts dev.Dockerfile .
```
Run with

```
docker run -p 3000:3000 proxie-ts
```

```
docker-compose build web
docker-compose run web
```

## Medplum (FHIR Storage)

Medplum is an open-source FHIR server and React library. It helps you build healthcare applications faster by providing a robust backend and a set of React components that are ready to use. It supports all FHIR resource types and operations.

You can find more about it [here](https://www.medplum.com/docs).

We're running medplum in our [AWS Account](https://www.medplum.com/docs/self-hosting/install-on-aws).

## Mantine v6

Mantine is a React components and hooks library with native dark theme support. It provides a set of high quality components and hooks that make it easy to build beautiful responsive web applications.

You can find more about it [here](https://v6.mantine.dev/pages/about/).

## Medplum React & FHIRTypes

Medplum React is a library that provides a set of React components for building healthcare applications. It is built on top of Medplum and provides components that are specifically designed to work with FHIR data.

[medplum/react](https://www.medplum.com/docs/react).

[medplum/fhirtypes](https://www.medplum.com/docs/api/fhir/datatypes).

## Storybook

To run storybook locally and test components `npm run storybook`

Storybook is published to chromatic using [github actions](https://www.chromatic.com/docs/github-actions).

It can be viewed [here](https://www.chromatic.com/library?appId=64c140c1685b6d1753f0d895).

Using the [@storybook/nextjs](https://www.npmjs.com/package/@storybook/nextjs#getting-started) to handle images and other nextjs features.

### Test storybook

To locally run the storybook tests use while storybook is running

```
npm run test-storybook
```

- [Writing interaction tests guide](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- [Test runner guide](https://storybook.js.org/addons/@storybook/test-runner)
- [Test runner documentation](https://github.com/storybookjs/test-runner)

Tests run automatically in chromatic after every deploy.

### Local fonts

Local font ttf files are stored in the fonts folder, and stories can be created to see the existing fonts and usage guide

- [Next/fonts guide](https://nextjs.org/docs/app/api-reference/components/font)
