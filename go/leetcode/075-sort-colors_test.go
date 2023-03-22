package leetcode

import (
	"testing"
)

func TestSortColors(t *testing.T) {
	tests := []struct {
		args     []int
		expected []int
	}{
		{
			args:     []int{2, 0, 2, 1, 1, 0},
			expected: []int{0, 0, 1, 1, 2, 2},
		},
		{
			args:     []int{2, 0, 1},
			expected: []int{0, 1, 2},
		},
		{
			args:     []int{1, 2, 0},
			expected: []int{0, 1, 2},
		},
		{
			args:     []int{2, 0},
			expected: []int{0, 2},
		},
	}

	for _, tc := range tests {
		for _, v := range sortColorss {
			result := CopyArray(tc.args)
			v(result)
			if !Equal(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
