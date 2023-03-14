package leetcode

import (
	"testing"
)

func TestMinPathSum(t *testing.T) {
	tests := []struct {
		args     [][]int
		expected int
	}{
		{
			args:     [][]int{{1, 3, 1}, {1, 5, 1}, {4, 2, 1}},
			expected: 7,
		},
		{
			args:     [][]int{{1, 2, 3}, {4, 5, 6}},
			expected: 12,
		},
	}

	for _, tc := range tests {
		for _, v := range minPathSums {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
