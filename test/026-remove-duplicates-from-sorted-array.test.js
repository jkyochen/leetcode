const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,1,2]", () => {
			let arr = [1, 1, 2];
			expect(arr.slice(0, fn(arr))).toEqual([1, 2]);
		});

		it("[0,0,1,1,1,2,2,3,3,4]", () => {
			let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
			expect(arr.slice(0, fn(arr))).toEqual([0, 1, 2, 3, 4]);
		});
	});
});
