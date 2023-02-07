const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("2*3", () => {
			expect(fn("2", "3")).toEqual("6");
		});

		it("123*456", () => {
			expect(fn("123", "456")).toEqual("56088");
		});

		it("123456789*987654321", () => {
			expect(fn("123456789", "987654321")).toEqual("121932631112635269");
		});
	});
});
