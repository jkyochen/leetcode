package leetcode

import (
	"testing"
)

func TestLengthOfLastWord(t *testing.T) {
	tests := []struct {
		args    string
		expected int
	}{
		{
			args:    "Hello World",
			expected: 5,
		},
		{
			args:    "   fly me   to   the moon  ",
			expected: 4,
		},
		{
			args:    "luffy is still joyboy",
			expected: 6,
		},
		{
			args:    "",
			expected: 0,
		},
	}

	for _, tc := range tests {
		for _, v := range lengthOfLastWords {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
