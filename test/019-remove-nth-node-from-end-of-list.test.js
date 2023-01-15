const fns = require(require(".")(__filename).sourcePath);
const { createListNode, convertLinkedListToArray } = require("../util");

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("[1,2,3,4,5]", () => {
			let res = fn(createListNode([1, 2, 3, 4, 5]), 2);
			expect(convertLinkedListToArray(res)).toEqual([1, 2, 3, 5]);
		});

		it("[1]", () => {
			let res = fn(createListNode([1]), 1);
			expect(convertLinkedListToArray(res)).toEqual([]);
		});

		it("[1,2]", () => {
			let res = fn(createListNode([1, 2]), 1);
			expect(convertLinkedListToArray(res)).toEqual([1]);
		});
	});
});
