const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @return {ListNode}
	 */
	function mergeTwoLists(list1, list2) {
		let head = new ListNode(0);
		let curNode = head;
		merge();
		return head.next;
		function merge() {
			if (!(list1 || list2)) {
				return;
			}
			if (!list1) {
				curNode.next = list2;
				return;
			}
			if (!list2) {
				curNode.next = list1;
				return;
			}
			if (list1.val <= list2.val) {
				curNode.next = new ListNode(list1.val);
				list1 = list1.next;
			} else {
				curNode.next = new ListNode(list2.val);
				list2 = list2.next;
			}
			curNode = curNode.next;
			merge(list1, list2);
		}
	},
	/**
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @return {ListNode}
	 */
	function mergeTwoLists1(list1, list2) {
		if (!list1) {
			return list2;
		}
		if (!list2) {
			return list1;
		}
		if (list1.val <= list2.val) {
			list1.next = mergeTwoLists1(list1.next, list2);
			return list1;
		}
		list2.next = mergeTwoLists1(list1, list2.next);
		return list2;
	},
	/**
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @return {ListNode}
	 */
	function mergeTwoLists2(list1, list2) {
		let preHead = new ListNode(0);
		let lastNode = preHead;
		while (list1 || list2) {
			if (!list2 || (list1 && list1.val <= list2.val)) {
				lastNode.next = new ListNode(list1.val);
				lastNode = lastNode.next;
				list1 = list1.next;
				continue;
			}
			lastNode.next = new ListNode(list2.val);
			lastNode = lastNode.next;
			list2 = list2.next;
		}
		return preHead.next;
	},
	/**
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @return {ListNode}
	 */
	function mergeTwoLists3(list1, list2) {
		let preHead = new ListNode(0);
		let lastNode = preHead;
		while (list1 && list2) {
			if (list1.val <= list2.val) {
				lastNode.next = new ListNode(list1.val);
				list1 = list1.next;
			} else {
				lastNode.next = new ListNode(list2.val);
				list2 = list2.next;
			}
			lastNode = lastNode.next;
		}
		lastNode.next = list1 === null ? list2 : list1;
		return preHead.next;
	},
];
