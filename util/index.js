/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {number[]} eles
 * @return {ListNode}
 */
function createListNode(eles) {
	eles = eles.reverse();
	let nextNode;
	for (const ele of eles) {
		nextNode = new ListNode(ele, nextNode);
	}
	return nextNode;
}

/**
 * @param {ListNode} node
 * @return {Array}
 */
function convertLinkedListToArray(node) {
	let v = [];
	while (node !== null) {
		v.push(node.val);
		node = node.next;
	}
	return v;
}

module.exports = {
	ListNode,
	createListNode,
	convertLinkedListToArray,
	RomansNumberPair: {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	},
	PhoneNumberLetterPair: {
		1: [],
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
		0: [],
	},
};
