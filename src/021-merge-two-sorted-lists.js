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
		let head = null;
		let lasEle = null;
		while (list1 !== null || list2 !== null) {
			if (list2 === null || (list1 !== null && list1.val <= list2.val)) {
				if (head) {
					lasEle.next = new ListNode(list1.val);
				} else {
					head = new ListNode(list1.val);
					lasEle = head;
				}
				if (lasEle.next) {
					lasEle = lasEle.next;
				}
				list1 = list1.next;
				continue;
			}
			if (head) {
				lasEle.next = new ListNode(list2.val);
			} else {
				head = new ListNode(list2.val);
				lasEle = head;
			}
			if (lasEle.next) {
				lasEle = lasEle.next;
			}
			list2 = list2.next;
		}
		return head;
	},
];
