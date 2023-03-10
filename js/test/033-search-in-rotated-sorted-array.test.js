const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[4,5,6,7,0,1,2]", () => {
			expect(fn([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
		});

		it("[4,5,6,7,0,1,2]", () => {
			expect(fn([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
		});

		it("[1]", () => {
			expect(fn([1], 0)).toEqual(-1);
		});

		it("[3,1]", () => {
			expect(fn([3, 1], 1)).toEqual(1);
		});

		it("[5,1,3]", () => {
			expect(fn([5, 1, 3], 5)).toEqual(0);
		});

		it("[5,1,3]", () => {
			expect(fn([5, 1, 3], 3)).toEqual(2);
		});

		it("[4,5,6,7,8,1,2,3]", () => {
			expect(fn([4, 5, 6, 7, 8, 1, 2, 3], 8)).toEqual(4);
		});
	});
});
