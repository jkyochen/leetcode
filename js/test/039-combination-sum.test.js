const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[2,3,6,7]", () => {
			expect(fn([2, 3, 6, 7], 7).sort()).toEqual([[2, 2, 3], [7]]);
		});

		it("[2,3,5]", () => {
			expect(fn([2, 3, 5], 8).sort()).toEqual([
				[2, 2, 2, 2],
				[2, 3, 3],
				[3, 5],
			]);
		});

		it("[2]", () => {
			expect(fn([2], 1)).toEqual([]);
		});
	});
});
