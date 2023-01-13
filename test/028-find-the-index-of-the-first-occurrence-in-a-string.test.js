const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("sadbutsad", () => {
			expect(fn("sadbutsad", "sad")).toEqual(0);
		});

		it("leetcode", () => {
			expect(fn("leetcode", "leeto")).toEqual(-1);
		});
	});
});
