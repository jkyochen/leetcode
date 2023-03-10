const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("321", () => {
			expect(fn(123)).toEqual(321);
		});

		it("-321", () => {
			expect(fn(-123)).toEqual(-321);
		});

		it("120", () => {
			expect(fn(120)).toEqual(21);
		});

		it("0", () => {
			expect(fn(0)).toEqual(0);
		});
	});
});
