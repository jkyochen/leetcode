package leetcode

import (
	"testing"
)

func TestGetPermutation(t *testing.T) {
	tests := []struct {
		args     int
		args2    int
		expected string
	}{
		{
			args:     3,
			args2:    3,
			expected: "213",
		},
		{
			args:     4,
			args2:    9,
			expected: "2314",
		},
		{
			args:     3,
			args2:    1,
			expected: "123",
		},
		{
			args:     9,
			args2:    206490,
			expected: "619754832",
		},
		{
			args:     1,
			args2:    1,
			expected: "1",
		},
	}

	for _, tc := range tests {
		for _, v := range getPermutations {
			result := v(tc.args, tc.args2)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
