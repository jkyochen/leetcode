const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[5,7,7,8,8,10]", () => {
			expect(fn([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
		});

		it("[5,7,7,8,8,10]", () => {
			expect(fn([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
		});

		it("[]", () => {
			expect(fn([], 0)).toEqual([-1, -1]);
		});

		it("[1]", () => {
			expect(fn([1], 1)).toEqual([0, 0]);
		});

		it("[3,3,3]", () => {
			expect(fn([3, 3, 3], 3)).toEqual([0, 2]);
		});
	});
});
