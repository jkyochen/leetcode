const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,2,3]", () => {
			let nums = [1, 2, 3];
			fn(nums);
			expect(nums).toEqual([1, 3, 2]);
		});

		it("[3,2,1]", () => {
			let nums = [3, 2, 1];
			fn(nums);
			expect(nums).toEqual([1, 2, 3]);
		});

		it("[1,1,5]", () => {
			let nums = [1, 1, 5];
			fn(nums);
			expect(nums).toEqual([1, 5, 1]);
		});
	});
});
