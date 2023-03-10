const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[-1,0,1,2,-1,-4]", () => {
			expect(fn([-1, 0, 1, 2, -1, -4])).toEqual([
				[-1, -1, 2],
				[-1, 0, 1],
			]);
		});

		it("[0,1,1]", () => {
			expect(fn([0, 1, 1])).toEqual([]);
		});

		it("[0,0,0]", () => {
			expect(fn([0, 0, 0])).toEqual([[0, 0, 0]]);
		});
	});
});
