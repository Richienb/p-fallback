import { AsyncReturnType } from "type-fest" // eslint-disable-line import/no-unresolved

/**
Try to execute a list of promises until one succeeds.
@param promiseFunctions The array of promise-returning functions to execute. An [AggregateError] is thrown if all of them fail.
@example
```
const pFallback = require("p-fallback");

const result = await pFallback([
	asyncOperation,
	otherAsyncOperation
]);
```
*/
declare function pFallback<ValueType>(promiseFunctions: readonly ValueType[]): Promise<AsyncReturnType<ValueType>>

export = pFallback
