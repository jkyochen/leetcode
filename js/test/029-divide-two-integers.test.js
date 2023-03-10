const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("10,3", () => {
			expect(fn(10, 3)).toEqual(3);
		});

		it("7,-3", () => {
			expect(fn(7, -3)).toEqual(-2);
		});

		it("1,2", () => {
			expect(fn(1, 2)).toEqual(0);
		});

		it("-2147483648,-1", () => {
			expect(fn(-2147483648, -1)).toEqual(2147483647);
		});
	});
});
