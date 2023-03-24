package leetcode

import (
	"testing"
)

func TestSubsets(t *testing.T) {
	tests := []struct {
		args     []int
		expected [][]int
	}{
		{
			args: []int{1, 2, 3},
			expected: [][]int{
				{},
				{1},
				{1, 2},
				{1, 2, 3},
				{1, 3},
				{2},
				{2, 3},
				{3},
			},
		},
		{
			args: []int{0},
			expected: [][]int{
				{},
				{0},
			},
		},
	}

	for _, tc := range tests {
		for _, v := range subsetss {
			result := v(tc.args)
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
