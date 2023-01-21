const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,2,3]", () => {
			expect(fn([1, 2, 3])).toEqual([
				[1, 2, 3],
				[1, 3, 2],
				[2, 1, 3],
				[2, 3, 1],
				[3, 1, 2],
				[3, 2, 1],
			]);
		});

		it("[0,1]", () => {
			expect(fn([0, 1])).toEqual([
				[0, 1],
				[1, 0],
			]);
		});

		it("[1]", () => {
			expect(fn([1])).toEqual([[1]]);
		});
	});
});
