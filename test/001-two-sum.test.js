const fns = require("../src/001-two-sum");

describe("Two Sum", () => {
	fns.forEach((fn) => {
		describe(fn.name, () => {
			it("expect [0,1]", () => {
				expect(fn([1, 2], 3)).toEqual(expect.arrayContaining([0, 1]));
			});

			it("expect [0,1]", () => {
				expect(fn([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
			});

			it("expect [1,2]", () => {
				expect(fn([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
			});
		});
	});
});
