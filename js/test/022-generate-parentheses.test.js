const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("3", () => {
			expect(fn(3).sort()).toEqual([
				"((()))",
				"(()())",
				"(())()",
				"()(())",
				"()()()",
			]);
		});

		it("1", () => {
			expect(fn(1).sort()).toEqual(["()"]);
		});
	});
});
