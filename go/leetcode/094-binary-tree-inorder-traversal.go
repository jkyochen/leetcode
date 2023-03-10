package leetcode

var inorderTraversals = []func(root *TreeNode) []int{
	inorderTraversal,
	inorderTraversal1,
}

func inorderTraversal(root *TreeNode) []int {
	result := []int{}
	var inorder func(node *TreeNode)
	inorder = func(node *TreeNode) {
		if node == nil {
			return
		}
		inorder(node.Left)
		result = append(result, node.Val)
		inorder(node.Right)
	}
	inorder(root)
	return result
}

func inorderTraversal1(root *TreeNode) []int {
	result := []int{}
	stack := []*TreeNode{}
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		result = append(result, root.Val)
		stack = stack[:len(stack)-1]
		root = root.Right
	}
	return result
}

// TODO Morris
func inorderTraversal2(root *TreeNode) []int {
	return nil
}
