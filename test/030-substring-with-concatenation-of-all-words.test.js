const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("barfoothefoobarman", () => {
			expect(fn("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
		});

		it("wordgoodgoodgoodbestword", () => {
			expect(
				fn("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]),
			).toEqual([]);
		});

		it("barfoofoobarthefoobarman", () => {
			expect(fn("barfoofoobarthefoobarman", ["bar", "foo", "the"])).toEqual([
				6, 9, 12,
			]);
		});

		it("wordgoodgoodgoodbestword", () => {
			expect(
				fn("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]),
			).toEqual([8]);
		});

		it("foobarfoobar", () => {
			expect(fn("foobarfoobar", ["foo", "bar"])).toEqual([0, 3, 6]);
		});
	});
});
