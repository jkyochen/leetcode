const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	function addTwoNumbers(l1, l2) {
		let isExistCarry = false;
		let curNode1 = l1;
		let curNode2 = l2;
		while (curNode1 && curNode2) {
			let sum = curNode1.val + curNode2.val;
			if (isExistCarry) {
				sum++;
			}
			if (sum < 10) {
				isExistCarry = false;
				curNode2.val = sum;
			} else {
				isExistCarry = true;
				curNode2.val = sum % 10;
			}
			if (curNode1.next && !curNode2.next) {
				curNode2.next = new ListNode(0);
			}
			if (!curNode1.next && curNode2.next) {
				curNode1.next = new ListNode(0);
			}
			if (!(curNode1.next || curNode2.next) && isExistCarry) {
				curNode2.next = new ListNode(1);
			}
			curNode1 = curNode1.next;
			curNode2 = curNode2.next;
		}
		return l2;
	},
];
