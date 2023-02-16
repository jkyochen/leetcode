package leetcode

import (
	"testing"
)

func TestLengthOfLastWord(t *testing.T) {
	tests := []struct {
		s    string
		want int
	}{
		{
			s:    "Hello World",
			want: 5,
		},
		{
			s:    "   fly me   to   the moon  ",
			want: 4,
		},
		{
			s:    "luffy is still joyboy",
			want: 6,
		},
		{
			s:    "",
			want: 0,
		},
	}

	for _, tc := range tests {
		for _, v := range lengthOfLastWords {
			result := v(tc.s)
			if result != tc.want {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.s, tc.want, result)
			}
		}
	}
}
