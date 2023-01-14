const { reverse } = require(require(".")(__filename).sourcePath);

describe("Reverse Integer", () => {
	it("321", () => {
		expect(reverse(123)).toEqual(321);
	});

	it("-321", () => {
		expect(reverse(-123)).toEqual(-321);
	});

	it("120", () => {
		expect(reverse(120)).toEqual(21);
	});

	it("0", () => {
		expect(reverse(0)).toEqual(0);
	});
});
