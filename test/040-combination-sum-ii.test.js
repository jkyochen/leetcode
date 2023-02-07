const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[10,1,2,7,6,1,5]", () => {
			expect(fn([10, 1, 2, 7, 6, 1, 5], 8).sort()).toEqual([
				[1, 1, 6],
				[1, 2, 5],
				[1, 7],
				[2, 6],
			]);
		});

		it("[2,5,2,1,2]", () => {
			expect(fn([2, 5, 2, 1, 2], 5).sort()).toEqual([[1, 2, 2], [5]]);
		});
	});
});
