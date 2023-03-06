package leetcode

import (
	"testing"
)

func TestMergeIntervals(t *testing.T) {
	tests := []struct {
		args     [][]int
		expected [][]int
	}{
		{
			args:     [][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}},
			expected: [][]int{{1, 6}, {8, 10}, {15, 18}},
		},
		{
			args:     [][]int{{1, 4}, {4, 5}},
			expected: [][]int{{1, 5}},
		},
		{
			args:     [][]int{{1, 4}, {0, 4}},
			expected: [][]int{{0, 4}},
		},
	}

	for _, tc := range tests {
		for _, v := range mergeIntervalss {
			result := v(tc.args)
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
