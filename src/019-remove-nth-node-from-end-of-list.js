const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd(head, n) {
		let curPoint = head;
		let beforePoint = null;
		while (curPoint !== null) {
			curPoint.before = beforePoint;
			beforePoint = curPoint;
			curPoint = curPoint.next;
		}
		let delPoint = beforePoint;
		for (let i = 0; i < n - 1; i++) {
			delPoint = delPoint.before;
		}
		if (delPoint.before === null) {
			return delPoint.next;
		}
		delPoint.before.next = delPoint.next;
		return head;
	},
];
