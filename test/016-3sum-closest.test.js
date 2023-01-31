const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[-1,2,1,-4]", () => {
			expect(fn([-1, 2, 1, -4], 1)).toEqual(2);
		});

		it("[0,0,0]", () => {
			expect(fn([0, 0, 0], 1)).toEqual(0);
		});
	});
});
