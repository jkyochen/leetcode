package leetcode

import (
	"testing"
)

func TestMaxSubArray(t *testing.T) {
	tests := []struct {
		args     []int
		expected int
	}{
		{
			args:     []int{-2, 1, -3, 4, -1, 2, 1, -5, 4},
			expected: 6,
		},
		{
			args:     []int{1},
			expected: 1,
		},
		{
			args:     []int{5, 4, -1, 7, 8},
			expected: 23,
		},
		{
			args:     []int{-1},
			expected: -1,
		},
	}

	for _, tc := range tests {
		for _, v := range maxSubArrays {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
