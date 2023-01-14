const fns = require(require(".")(__filename).sourcePath);

describe("Container With Most Water", () => {
	fns.forEach((fn) => {
		describe(fn.name, () => {
			it("[1,8,6,2,5,4,8,3,7]", () => {
				expect(fn([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
			});

			it("[1,1]", () => {
				expect(fn([1, 1])).toEqual(1);
			});
		});
	});
});
