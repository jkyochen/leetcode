const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("abcabcbb", () => {
			expect(fn("abcabcbb")).toEqual(3);
		});

		it("bbbbb", () => {
			expect(fn("bbbbb")).toEqual(1);
		});

		it("pwwkew", () => {
			expect(fn("pwwkew")).toEqual(3);
		});

		it("dvdf", () => {
			expect(fn("dvdf")).toEqual(3);
		});
	});
});
