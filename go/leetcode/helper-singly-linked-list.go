package leetcode

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func ArrayToSinglyLinked(v []int) *ListNode {
	preHead := &ListNode{0, nil}
	curNode := preHead
	for i := 0; i < len(v); i++ {
		curNode.Next = &ListNode{v[i], nil}
		curNode = curNode.Next
	}
	return preHead.Next
}

func SinglyLinkedToArray(node *ListNode) []int {
	result := []int{}
	for node != nil {
		result = append(result, node.Val)
		node = node.Next
	}
	return result
}
