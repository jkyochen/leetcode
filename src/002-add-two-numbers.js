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
 * @param {ListNode} node1
 * @param {ListNode} node2
 * @return {ListNode}
 */
function addTwoNumbers(node1, node2) {
	let result = [];
	let existCarry = false;
	while (node1 || node2) {
		let node1Value = 0;
		let node2Value = 0;
		if (node1) {
			node1Value = node1.val;
			node1 = node1.next;
		}
		if (node2) {
			node2Value = node2.val;
			node2 = node2.next;
		}

		let sum = node1Value + node2Value;
		if (existCarry) {
			sum += 1;
		}
		if (sum < 10) {
			result.push(sum);
			existCarry = false;
		} else {
			result.push(sum % 10);
			existCarry = true;
		}
	}
	if (existCarry) {
		result.push(1);
	}
	return createListNode(result);
}

module.exports = {
	createListNode,
	addTwoNumbers,
};
