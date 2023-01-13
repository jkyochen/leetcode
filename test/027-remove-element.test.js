const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[3,2,2,3]", () => {
			const arr = [3, 2, 2, 3];
			expect(arr.slice(0, fn(arr, 3))).toEqual([2, 2]);
		});

		it("[0,1,2,2,3,0,4,2]", () => {
			const arr = [0, 1, 2, 2, 3, 0, 4, 2];
			expect(arr.slice(0, fn(arr, 2))).toEqual([0, 1, 0, 4, 3]);
		});
	});
});
