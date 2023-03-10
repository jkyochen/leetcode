const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,1,2]", () => {
			expect(fn([1, 1, 2])).toEqual([
				[1, 1, 2],
				[1, 2, 1],
				[2, 1, 1],
			]);
		});

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

		it("[3,3,0,3]", () => {
			expect(fn([3, 3, 0, 3])).toEqual([
				[0, 3, 3, 3],
				[3, 0, 3, 3],
				[3, 3, 0, 3],
				[3, 3, 3, 0],
			]);
		});
	});
});
