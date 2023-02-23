package leetcode

var inorderTraversals = []func(root *TreeNode) []int{
	inorderTraversal,
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
