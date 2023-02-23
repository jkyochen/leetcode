package leetcode

var isSameTrees = []func(p *TreeNode, q *TreeNode) bool{
	isSameTree,
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	isSame := true
	var inorder func(pNode *TreeNode, qNode *TreeNode)
	inorder = func(pNode *TreeNode, qNode *TreeNode) {
		if !isSame {
			return
		}
		if pNode == nil && qNode == nil {
			return
		}
		if pNode == nil || qNode == nil {
			isSame = false
			return
		}
		if pNode.Val != qNode.Val {
			isSame = false
			return
		}
		inorder(pNode.Left, qNode.Left)
		inorder(pNode.Right, qNode.Right)
	}
	inorder(p, q)
	return isSame
}
