const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("babad", () => {
			expect(fn("babad")).toEqual("bab");
		});

		it("cbbd", () => {
			expect(fn("cbbd")).toEqual("bb");
		});
	});
});
