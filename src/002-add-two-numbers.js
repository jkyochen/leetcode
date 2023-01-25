const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	function addTwoNumbers(l1, l2) {
		let carry = 0;
		let curNode1 = l1;
		let curNode2 = l2;
		while (curNode1 && curNode2) {
			let sum = curNode1.val + curNode2.val + carry;
			if (sum < 10) {
				carry = 0;
				curNode2.val = sum;
			} else {
				carry = 1;
				curNode2.val = sum % 10;
			}
			if (curNode1.next && !curNode2.next) {
				curNode2.next = new ListNode(0);
			}
			if (!curNode1.next && curNode2.next) {
				curNode1.next = new ListNode(0);
			}
			if (!(curNode1.next || curNode2.next) && carry) {
				curNode2.next = new ListNode(1);
			}
			curNode1 = curNode1.next;
			curNode2 = curNode2.next;
		}
		return l2;
	},
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	function addTwoNumbers1(l1, l2) {
		let head = new ListNode(0);
		let curNode = head;
		let carry = 0;
		while (l1 || l2 || carry) {
			let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
			carry = sum < 10 ? 0 : 1;
			curNode.next = new ListNode(sum % 10);
			curNode = curNode.next;
			l1 = l1?.next;
			l2 = l2?.next;
		}
		return head.next;
	},
];
