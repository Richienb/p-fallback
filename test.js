const test = require("ava")
const AggregateError = require("aggregate-error")
const pFallback = require(".")

test("main", async t => {
	t.is(await pFallback([
		async () => "a",
		async () => "b"
	]), "a")
	t.is(await pFallback([
		async () => {
			throw new Error("Test error.")
		},
		async () => "b"
	]), "b")
	await t.throwsAsync(async () => pFallback([
		async () => {
			throw new Error("Test error 1.")
		},
		async () => {
			throw new Error("Test error 2.")
		}
	]), {
		instanceOf: AggregateError
	})
})
