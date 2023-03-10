const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[-1,2,1,-4]", () => {
			expect(fn([-1, 2, 1, -4], 1)).toEqual(2);
		});

		it("[0,0,0]", () => {
			expect(fn([0, 0, 0], 1)).toEqual(0);
		});

		it("[1,1,-1]", () => {
			expect(fn([1, 1, -1], 2)).toEqual(1);
		});

		it("[4,0,5,-5,3,3,0,-4,-5]", () => {
			expect(fn([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)).toEqual(-2);
		});
	});
});
