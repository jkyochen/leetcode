package leetcode

import (
	"testing"
)

func TestCanJump(t *testing.T) {
	tests := []struct {
		args     []int
		expected bool
	}{
		{
			args:     []int{2, 3, 1, 1, 4},
			expected: true,
		},
		{
			args:     []int{3, 2, 1, 0, 4},
			expected: false,
		},
		{
			args:     []int{2, 0, 0},
			expected: true,
		},
		{
			args:     []int{0},
			expected: true,
		},
		{
			args:     []int{2, 0},
			expected: true,
		},
		{
			args:     []int{1, 1, 1, 0},
			expected: true,
		},
	}

	for _, tc := range tests {
		for _, v := range canJumps {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
