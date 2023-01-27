const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("2.00000", () => {
			expect(fn([1, 3], [2])).toEqual(2.0);
		});

		it("2.50000", () => {
			expect(fn([1, 2], [3, 4])).toEqual(2.5);
		});
	});
});
