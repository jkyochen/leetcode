const { myAtoi } = require("../src/008-atoi");

describe("Atoi", () => {
	it("42", () => {
		expect(myAtoi("42")).toEqual(42);
	});

	it("   -42", () => {
		expect(myAtoi("   -42")).toEqual(-42);
	});

	it("4193 with words", () => {
		expect(myAtoi("4193 with words")).toEqual(4193);
	});

	it("words and 987", () => {
		expect(myAtoi("words and 987")).toEqual(0);
	});

	it("+1", () => {
		expect(myAtoi("+1")).toEqual(1);
	});

	it("-+12", () => {
		expect(myAtoi("-+12")).toEqual(0);
	});

	it("+-12", () => {
		expect(myAtoi("+-12")).toEqual(0);
	});

	it(".1", () => {
		expect(myAtoi(".1")).toEqual(0);
	});

	it("   +0 123", () => {
		expect(myAtoi("   +0 123")).toEqual(0);
	});
});
