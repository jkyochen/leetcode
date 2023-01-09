const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it('["flower","flow","flight"]', () => {
			expect(fn(["flower", "flow", "flight"])).toEqual("fl");
		});

		it('["dog","racecar","car"]', () => {
			expect(fn(["dog", "racecar", "car"])).toEqual("");
		});
	});
});
