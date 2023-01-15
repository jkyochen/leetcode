const fns = require(require(".")(__filename).sourcePath);
const { createListNode, convertLinkedListToArray } = require("../util");

fns.forEach((fn) => {
	describe(fn.name, () => {
		it("l1 = [1,2,4], l2 = [1,3,4]", () => {
			let res = fn(createListNode([1, 2, 4]), createListNode([1, 3, 4]));
			expect(convertLinkedListToArray(res)).toEqual([1, 1, 2, 3, 4, 4]);
		});

		it("l1 = [], l2 = []", () => {
			let res = fn(createListNode([]), createListNode([]));
			expect(convertLinkedListToArray(res)).toEqual([]);
		});

		it("l1 = [], l2 = [0]", () => {
			let res = fn(createListNode([]), createListNode([0]));
			expect(convertLinkedListToArray(res)).toEqual([0]);
		});
	});
});
