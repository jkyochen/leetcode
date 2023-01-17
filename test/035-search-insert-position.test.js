const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,3,5,6]", () => {
			expect(fn([1, 3, 5, 6], 5)).toEqual(2);
		});

		it("[1,3,5,6]", () => {
			expect(fn([1, 3, 5, 6], 2)).toEqual(1);
		});

		it("[1,3,5,6]", () => {
			expect(fn([1, 3, 5, 6], 7)).toEqual(4);
		});

		it("[1,3,5,6]", () => {
			expect(fn([1, 3, 5, 6], 0)).toEqual(0);
		});

		it("[1,3]", () => {
			expect(fn([1, 3], 2)).toEqual(1);
		});
	});
});
