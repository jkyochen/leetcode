const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("23", () => {
			expect(fn("23")).toEqual([
				"ad",
				"ae",
				"af",
				"bd",
				"be",
				"bf",
				"cd",
				"ce",
				"cf",
			]);
		});

		it("empty", () => {
			expect(fn("")).toEqual([]);
		});

		it("2", () => {
			expect(fn("2")).toEqual(["a", "b", "c"]);
		});

		it("32", () => {
			expect(fn("32")).toEqual([
				"da",
				"db",
				"dc",
				"ea",
				"eb",
				"ec",
				"fa",
				"fb",
				"fc",
			]);
		});
	});
});
