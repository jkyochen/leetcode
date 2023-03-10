const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,0,-1,0,-2,2]", () => {
			expect(fn([1, 0, -1, 0, -2, 2], 0)).toEqual([
				[-2, -1, 1, 2],
				[-2, 0, 0, 2],
				[-1, 0, 0, 1],
			]);
		});

		it("[2,2,2,2,2]", () => {
			expect(fn([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
		});
	});
});
