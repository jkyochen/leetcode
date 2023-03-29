package leetcode

import (
	"testing"
)

func TestSubsetsWithDup(t *testing.T) {
	tests := []struct {
		args     []int
		expected [][]int
	}{
		{
			args: []int{1, 2, 2},
			expected: [][]int{
				{},
				{1},
				{1, 2},
				{1, 2, 2},
				{2},
				{2, 2},
			},
		},
		{
			args: []int{0},
			expected: [][]int{
				{},
				{0},
			},
		},
		{
			args: []int{4, 4, 4, 1, 4},
			expected: [][]int{
				{},
				{1},
				{1, 4},
				{1, 4, 4},
				{1, 4, 4, 4},
				{1, 4, 4, 4, 4},
				{4},
				{4, 4},
				{4, 4, 4},
				{4, 4, 4, 4},
			},
		},
	}

	for _, tc := range tests {
		for _, v := range subsetsWithDups {
			result := v(tc.args)
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
