const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("()", () => {
			expect(fn("()")).toEqual(true);
		});

		it("()[]{}", () => {
			expect(fn("()[]{}")).toEqual(true);
		});

		it("(]", () => {
			expect(fn("(]")).toEqual(false);
		});
	});
});
