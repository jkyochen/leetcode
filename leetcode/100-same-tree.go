package leetcode

var isSameTrees = []func(p *TreeNode, q *TreeNode) bool{
	isSameTree,
	isSameTree1,
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
		if (pNode == nil || qNode == nil) || pNode.Val != qNode.Val {
			isSame = false
			return
		}
		inorder(pNode.Left, qNode.Left)
		inorder(pNode.Right, qNode.Right)
	}
	inorder(p, q)
	return isSame
}

func isSameTree1(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}
	if p == nil || q == nil {
		return false
	}
	if p.Val != q.Val {
		return false
	}
	return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}
