const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	function swapPairs(head) {
		let preNode = new ListNode(0, head);
		let curNode = preNode;
		while (curNode.next?.next) {
			let firstNode = curNode.next;
			curNode.next = curNode.next.next;
			firstNode.next = curNode.next.next;
			curNode.next.next = firstNode;
			curNode = curNode.next.next;
		}
		return preNode.next;
	},
];
