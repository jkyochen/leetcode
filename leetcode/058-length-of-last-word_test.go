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
	}

	for i, tc := range tests {
		result := lengthOfLastWord(tc.s)
		if result != tc.want {
			t.Fatalf("Test %d failed — Expected %d, got %d", i+1, tc.want, result)
		}
	}
}
