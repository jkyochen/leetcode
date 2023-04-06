package leetcode

import (
	"testing"
)

func TestIsInterleave(t *testing.T) {
	tests := []struct {
		args     [3]string
		expected bool
	}{
		{
			args:     [3]string{"aabcc", "dbbca", "aadbbcbcac"},
			expected: true,
		},
		{
			args:     [3]string{"aabcc", "dbbca", "aadbbbaccc"},
			expected: false,
		},
		{
			args:     [3]string{"", "", ""},
			expected: true,
		},
		// {
		// 	args: [3]string{
		// 		"abababababababababababababababababababababababababababababababababababababababababababababababababbb",
		// 		"babababababababababababababababababababababababababababababababababababababababababababababababaaaba",
		// 		"abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb",
		// 	},
		// 	expected: true,
		// },
	}

	for _, tc := range tests {
		for _, v := range isInterleaves {
			result := v(tc.args[0], tc.args[1], tc.args[2])
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
