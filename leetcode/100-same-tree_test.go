package leetcode

import "testing"

func TestIsSameTree(t *testing.T) {
	tests := []struct {
		args1    *TreeNode
		args2    *TreeNode
		expected bool
	}{
		{
			args1:    &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{3, nil, nil}},
			args2:    &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{3, nil, nil}},
			expected: true,
		},
		{
			args1:    &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{1, nil, nil}},
			args2:    &TreeNode{1, &TreeNode{1, nil, nil}, &TreeNode{2, nil, nil}},
			expected: false,
		},
	}

	for _, tc := range tests {
		for _, v := range isSameTrees {
			result := v(tc.args1, tc.args2)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args1, tc.expected, result)
			}
		}
	}
}
