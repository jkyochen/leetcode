package leetcode

import (
	"testing"
)

func TestNumDecodings(t *testing.T) {
	tests := []struct {
		args     string
		expected int
	}{
		{
			args:     "12",
			expected: 2,
		},
		{
			args:     "226",
			expected: 3,
		},
		{
			args:     "111111111111111111111111111111111111111111111",
			expected: 1836311903,
		},
	}

	for _, tc := range tests {
		for _, v := range numDecodingss {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
