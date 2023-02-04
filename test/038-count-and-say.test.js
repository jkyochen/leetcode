const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("1", () => {
			expect(fn(1)).toEqual("1");
		});

		it("4", () => {
			expect(fn(4)).toEqual("1211");
		});
	});
});
