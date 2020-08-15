# p-fallback [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-fallback/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-fallback)

Try to execute a list of promises until one succeeds.

[![NPM Badge](https://nodei.co/npm/p-fallback.png)](https://npmjs.com/package/p-fallback)

## Install

```sh
npm install p-fallback
```

## Usage

```js
const pFallback = require("p-fallback");

const result = await pFallback([
	asyncOperation,
	otherAsyncOperation
]);
```

## API

### pFallback(promiseFunctions)

#### promiseFunctions

Type: `Array<() => Promise>`

The array of promise-returning functions to execute. An [AggregateError] is thrown if all of them fail.
