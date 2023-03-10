const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("121", () => {
			expect(fn("121")).toEqual(true);
		});

		it("1221", () => {
			expect(fn("1221")).toEqual(true);
		});

		it("-121", () => {
			expect(fn("-121")).toEqual(false);
		});

		it("10", () => {
			expect(fn("10")).toEqual(false);
		});
	});
});
