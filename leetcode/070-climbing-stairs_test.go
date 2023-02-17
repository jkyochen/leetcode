package leetcode

import (
	"testing"
)

func TestClimbStairs(t *testing.T) {
	tests := []struct {
		args     int
		expected int
	}{
		{
			args:     2,
			expected: 2,
		},
		{
			args:     3,
			expected: 3,
		},
		{
			args:     44,
			expected: 1134903170,
		},
	}

	for _, tc := range tests {
		for _, v := range climbStairss {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
