const { intToRoman } = require("../src/012-integer-to-roman");

describe("Atoi", () => {
	it("3", () => {
		expect(intToRoman(3)).toEqual("III");
	});

	it("4", () => {
		expect(intToRoman(4)).toEqual("IV");
	});

	it("58", () => {
		expect(intToRoman(58)).toEqual("LVIII");
	});

	it("1994", () => {
		expect(intToRoman(1994)).toEqual("MCMXCIV");
	});
});
