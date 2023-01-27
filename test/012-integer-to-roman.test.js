const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("3", () => {
			expect(fn(3)).toEqual("III");
		});

		it("4", () => {
			expect(fn(4)).toEqual("IV");
		});

		it("58", () => {
			expect(fn(58)).toEqual("LVIII");
		});

		it("1994", () => {
			expect(fn(1994)).toEqual("MCMXCIV");
		});
	});
});
