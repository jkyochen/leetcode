const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("III", () => {
			expect(fn("III")).toEqual(3);
		});

		it("IV", () => {
			expect(fn("IV")).toEqual(4);
		});

		it("IX", () => {
			expect(fn("IX")).toEqual(9);
		});

		it("LVIII", () => {
			expect(fn("LVIII")).toEqual(58);
		});

		it("MCMXCIV", () => {
			expect(fn("MCMXCIV")).toEqual(1994);
		});
	});
});
