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
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd1(head, n) {
		let len = 0;
		let curNode = head;
		while (curNode !== null) {
			curNode = curNode.next;
			len++;
		}

		if (len === n) {
			return head.next;
		}

		let count = len - n - 1;
		curNode = head;
		while (count > 0) {
			curNode = curNode.next;
			count--;
		}

		if (curNode.next) {
			curNode.next = curNode.next.next;
		}

		return head;
	},
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd2(head, n) {
		let preNode = new ListNode(0, head);
		let curNode = head;
		let len = 0;
		while (curNode !== null) {
			curNode = curNode.next;
			len++;
		}

		curNode = preNode;
		for (let i = 0; i < len - n; i++) {
			curNode = curNode.next;
		}

		curNode.next = curNode.next.next;
		return preNode.next;
	},
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd3(head, n) {
		let preNode = new ListNode(0, head);
		let curNode = preNode;
		let stack = [];
		while (curNode !== null) {
			stack.push(curNode);
			curNode = curNode.next;
		}

		while (n > 0) {
			stack.pop();
			n--;
		}

		curNode = stack.pop();
		curNode.next = curNode.next.next;
		return preNode.next;
	},
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd4(head, n) {
		let preNode = new ListNode(0, head);
		let leftNode = preNode;
		let rightNode = preNode;

		let i = 0;
		while (rightNode !== null) {
			rightNode = rightNode.next;
			if (i >= n + 1) {
				leftNode = leftNode.next;
			}
			i++;
		}

		leftNode.next = leftNode.next.next;
		return preNode.next;
	},
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd5(head, n) {
		let num = traverse(head, n);
		if (num === n) {
			return head.next;
		}
		return head;
		function traverse(node) {
			if (node === null) {
				return 0;
			}
			let num = traverse(node.next);
			if (num === n) {
				node.next = node.next.next;
			}
			return num + 1;
		}
	},
	/**
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	function removeNthFromEnd6(head, n) {
		let num = traverse(head, n);
		if (num === n) {
			return head.next;
		}
		return head;
		function traverse(node) {
			if (node === null) {
				return 0;
			}
			let num = traverse(node.next);
			if (num === n) {
				node.next = node.next.next;
			}
			return num + 1;
		}
	},
];
