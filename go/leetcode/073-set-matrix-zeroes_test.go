package leetcode

import (
	"testing"
)

func TestSetZeroes(t *testing.T) {
	tests := []struct {
		args     [][]int
		expected [][]int
	}{
		{
			args:     [][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}},
			expected: [][]int{{1, 0, 1}, {0, 0, 0}, {1, 0, 1}},
		},
		{
			args:     [][]int{{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}},
			expected: [][]int{{0, 0, 0, 0}, {0, 4, 5, 0}, {0, 3, 1, 0}},
		},
	}

	for _, tc := range tests {
		for _, v := range setZeroess {
			v(tc.args)
			result := tc.args
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
