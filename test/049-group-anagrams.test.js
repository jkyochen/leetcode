const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it(`["eat", "tea", "tan", "ate", "nat", "bat"]`, () => {
			let result = fn(["eat", "tea", "tan", "ate", "nat", "bat"]);
			result = result.map((r) => r.sort()).reverse();
			expect(result).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
		});

		it(`[""]`, () => {
			let result = fn([""]);
			result = result.map((r) => r.sort()).reverse();
			expect(result).toEqual([[""]]);
		});

		it(`["a"]`, () => {
			let result = fn(["a"]);
			result = result.map((r) => r.sort()).reverse();
			expect(result).toEqual([["a"]]);
		});

		it(`["","b"]`, () => {
			let result = fn(["", "b"]);
			result = result.map((r) => r.sort()).reverse();
			expect(result).toEqual([["b"], [""]]);
		});
	});
});
