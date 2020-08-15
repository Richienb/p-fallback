"use strict"

const AggregateError = require("aggregate-error")

module.exports = async promiseFunctions => {
	if (!Array.isArray(promiseFunctions) || promiseFunctions.length === 0) {
		throw new TypeError(`Expected an array with at least 1 promise-returning function, got ${typeof promiseFunctions}`)
	}

	const errors = []
	for await (const promiseFunction of promiseFunctions) {
		try {
			return await promiseFunction()
		} catch (error) {
			errors.push(error)
		}
	}

	throw new AggregateError(errors)
}
