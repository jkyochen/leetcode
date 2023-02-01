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
			let node1 = curNode.next;
			let node2 = curNode.next.next;
			// move second node to first node
			curNode.next = node2;
			// move after seconde node to after first node
			node1.next = node2.next;
			// move first node to second node
			node2.next = node1;
			curNode = node1;
		}
		return preNode.next;
	},
	/**
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	function swapPairs1(head) {
		if (!head?.next) {
			return head;
		}
		let newHead = head.next;
		head.next = swapPairs1(newHead.next);
		newHead.next = head;
		return newHead;
	},
];
