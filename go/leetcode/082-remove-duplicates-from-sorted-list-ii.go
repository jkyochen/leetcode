package leetcode

var deleteDuplicates2s = []func(head *ListNode) *ListNode{
	deleteDuplicates2,
	deleteDuplicates2Two,
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

func deleteDuplicates2Two(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	dummy := &ListNode{0, head}
	cur := dummy
	for cur.Next != nil && cur.Next.Next != nil {
		if cur.Next.Val == cur.Next.Next.Val {
			v := cur.Next.Val
			for cur.Next != nil && cur.Next.Val == v {
				cur.Next = cur.Next.Next
			}
		} else {
			cur = cur.Next
		}
	}

	return dummy.Next
}
