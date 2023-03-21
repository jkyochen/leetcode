package leetcode

import (
	"testing"
)

func TestSearchMatrix(t *testing.T) {
	tests := []struct {
		args     [][]int
		args1    int
		expected bool
	}{
		{
			args:     [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},
			args1:    3,
			expected: true,
		},
		{
			args:     [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}},
			args1:    13,
			expected: false,
		},
		{
			args:     [][]int{{1}},
			args1:    2,
			expected: false,
		},
		{
			args:     [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 50}},
			args1:    11,
			expected: true,
		},
	}

	for _, tc := range tests {
		for _, v := range searchMatrixs {
			result := v(tc.args, tc.args1)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
