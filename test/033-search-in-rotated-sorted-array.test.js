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
	});
});
