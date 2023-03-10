const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("x = 2.00000, n = 10", () => {
			expect(fn(2, 10)).toEqual(1024);
		});

		it("x = 2.10000, n = 3", () => {
			expect(fn(2.1, 3)).toEqual(9.261000000000001);
		});

		it("x = 2.00000, n = -2", () => {
			expect(fn(2, -2)).toEqual(0.25);
		});

		it("x = 2.00000, n = -2", () => {
			expect(fn(2, -2)).toEqual(0.25);
		});

		it("x = 0.44528, n = 0", () => {
			expect(fn(0.44528, 0)).toEqual(1);
		});
	});
});
