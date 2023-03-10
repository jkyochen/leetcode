const fns = require(require(".")(__filename).sourcePath);
const { createListNode, convertLinkedListToArray } = require("../util");

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,2,3,4]", () => {
			let res = fn(createListNode([1, 2, 3, 4]));
			expect(convertLinkedListToArray(res)).toEqual([2, 1, 4, 3]);
		});

		it("[]", () => {
			let res = fn(createListNode([]));
			expect(convertLinkedListToArray(res)).toEqual([]);
		});

		it("[1]", () => {
			let res = fn(createListNode([1]));
			expect(convertLinkedListToArray(res)).toEqual([1]);
		});

		it("[1,2,3,4,5]", () => {
			let res = fn(createListNode([1, 2, 3, 4, 5]));
			expect(convertLinkedListToArray(res)).toEqual([2, 1, 4, 3, 5]);
		});
	});
});
