const { addTwoNumbers } = require(require(".")(__filename).sourcePath);
const { createListNode, convertLinkedListToArray } = require("../util");

describe("Add Two Numbers", () => {
	it("[7, 0, 8]", () => {
		let res = addTwoNumbers(
			createListNode([2, 4, 3]),
			createListNode([5, 6, 4]),
		);
		expect(convertLinkedListToArray(res)).toEqual([7, 0, 8]);
	});

	it("[0]", () => {
		let res = addTwoNumbers(createListNode([0]), createListNode([0]));
		expect(convertLinkedListToArray(res)).toEqual([0]);
	});

	it("[8, 9, 9, 9, 0, 0, 0, 1]", () => {
		let res = addTwoNumbers(
			createListNode([9, 9, 9, 9, 9, 9, 9]),
			createListNode([9, 9, 9, 9]),
		);
		expect(convertLinkedListToArray(res)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
	});

	it("[7, 0, 4, 0, 1]", () => {
		let res = addTwoNumbers(
			createListNode([2, 4, 9]),
			createListNode([5, 6, 4, 9]),
		);
		expect(convertLinkedListToArray(res)).toEqual([7, 0, 4, 0, 1]);
	});
});
