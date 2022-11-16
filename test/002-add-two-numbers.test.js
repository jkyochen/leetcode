const { addTwoNumbers, createListNode } = require("../src/002-add-two-numbers");

describe("Add Two Numbers", () => {
	it("[7, 0, 8]", () => {
		expect(
			addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4])),
		).toEqual(createListNode([7, 0, 8]));
	});

	it("[0]", () => {
		expect(addTwoNumbers(createListNode([0]), createListNode([0]))).toEqual(
			createListNode([0]),
		);
	});

	it("[8, 9, 9, 9, 0, 0, 0, 1]", () => {
		expect(
			addTwoNumbers(
				createListNode([9, 9, 9, 9, 9, 9, 9]),
				createListNode([9, 9, 9, 9]),
			),
		).toEqual(createListNode([8, 9, 9, 9, 0, 0, 0, 1]));
	});
});
