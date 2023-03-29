package leetcode

var deleteDuplicates2s = []func(head *ListNode) *ListNode{
	deleteDuplicates2,
}

func deleteDuplicates2(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	preNode := &ListNode{0, head}
	befNode := preNode
	curNode := head

	for curNode != nil {
		if curNode.Next != nil && curNode.Val == curNode.Next.Val {
			dupNode := curNode.Next
			for dupNode != nil && dupNode.Val == curNode.Val {
				dupNode = dupNode.Next
			}
			if dupNode == nil {
				befNode.Next = nil
				break
			}
			curNode = dupNode
			continue
		}
		befNode.Next = curNode
		befNode = befNode.Next
		curNode = curNode.Next
	}
	return preNode.Next
}
