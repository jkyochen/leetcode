const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("42", () => {
			expect(fn("42")).toEqual(42);
		});

		it("   -42", () => {
			expect(fn("   -42")).toEqual(-42);
		});

		it("4193 with words", () => {
			expect(fn("4193 with words")).toEqual(4193);
		});

		it("words and 987", () => {
			expect(fn("words and 987")).toEqual(0);
		});

		it("+1", () => {
			expect(fn("+1")).toEqual(1);
		});

		it("-+12", () => {
			expect(fn("-+12")).toEqual(0);
		});

		it("+-12", () => {
			expect(fn("+-12")).toEqual(0);
		});

		it(".1", () => {
			expect(fn(".1")).toEqual(0);
		});

		it("   +0 123", () => {
			expect(fn("   +0 123")).toEqual(0);
		});

		it("-91283472332", () => {
			expect(fn("-91283472332")).toEqual(-2147483648);
		});
	});
});
