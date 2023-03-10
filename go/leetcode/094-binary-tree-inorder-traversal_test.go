package leetcode

import (
	"testing"
)

func TestInorderTraversal(t *testing.T) {
	tests := []struct {
		args     *TreeNode
		expected []int
	}{
		{
			args:     &TreeNode{1, nil, &TreeNode{2, &TreeNode{3, nil, nil}, nil}},
			expected: []int{1, 3, 2},
		},
		{
			args:     nil,
			expected: []int{},
		},
		{
			args:     &TreeNode{1, nil, nil},
			expected: []int{1},
		},
	}

	for _, tc := range tests {
		for _, v := range inorderTraversals {
			result := v(tc.args)
			if !Equal(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
