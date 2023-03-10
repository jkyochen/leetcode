package leetcode

import (
	"testing"
)

func TestInsertInterval(t *testing.T) {
	tests := []struct {
		args     [][]int
		args2    []int
		expected [][]int
	}{
		{
			args:     [][]int{{1, 3}, {6, 9}},
			args2:    []int{2, 5},
			expected: [][]int{{1, 5}, {6, 9}},
		},
		{
			args:     [][]int{{1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}},
			args2:    []int{4, 8},
			expected: [][]int{{1, 2}, {3, 10}, {12, 16}},
		},
		{
			args:     [][]int{},
			args2:    []int{5, 7},
			expected: [][]int{{5, 7}},
		},
		{
			args:     [][]int{{1, 5}},
			args2:    []int{2, 3},
			expected: [][]int{{1, 5}},
		},
		{
			args:     [][]int{{1, 5}},
			args2:    []int{2, 7},
			expected: [][]int{{1, 7}},
		},
	}

	for _, tc := range tests {
		for _, v := range insertIntervals {
			result := v(tc.args, tc.args2)
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
