const { romanToInt } = require(require(".")(__filename).sourcePath);

describe("Roman to Integer", () => {
	it("III", () => {
		expect(romanToInt("III")).toEqual(3);
	});

	it("IV", () => {
		expect(romanToInt("IV")).toEqual(4);
	});

	it("IX", () => {
		expect(romanToInt("IX")).toEqual(9);
	});

	it("LVIII", () => {
		expect(romanToInt("LVIII")).toEqual(58);
	});

	it("MCMXCIV", () => {
		expect(romanToInt("MCMXCIV")).toEqual(1994);
	});
});
