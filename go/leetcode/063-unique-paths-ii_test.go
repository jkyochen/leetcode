package leetcode

import (
	"testing"
)

func TestUniquePathsWithObstacles(t *testing.T) {
	tests := []struct {
		args     [][]int
		expected int
	}{
		{
			args:     [][]int{{0, 0, 0}, {0, 1, 0}, {0, 0, 0}},
			expected: 2,
		},
		{
			args:     [][]int{{0, 1}, {0, 0}},
			expected: 1,
		},
		{
			args:     [][]int{{1, 0}},
			expected: 0,
		},
		{
			args:     [][]int{{0, 0, 1, 0}},
			expected: 0,
		},
		{
			args:     [][]int{{1}, {0}},
			expected: 0,
		},
	}

	for _, tc := range tests {
		for _, v := range uniquePathsWithObstacless {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
