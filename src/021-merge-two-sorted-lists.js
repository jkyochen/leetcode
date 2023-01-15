const { ListNode } = require("../util");

module.exports = [
	/**
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @return {ListNode}
	 */
	function mergeTwoLists(list1, list2) {
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
