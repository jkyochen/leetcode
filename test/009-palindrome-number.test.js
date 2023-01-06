const fns = require("../src/009-palindrome-number");

describe("Palindrome Number", () => {
	fns.forEach((fn) => {
		describe(fn.name, () => {
			it("121", () => {
				expect(fn("121")).toEqual(true);
			});

			it("-121", () => {
				expect(fn("-121")).toEqual(false);
			});

			it("10", () => {
				expect(fn("10")).toEqual(false);
			});
		});
	});
});
