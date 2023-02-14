package leetcode

import (
	"testing"
)

func TestLengthOfLastWord(t *testing.T) {
	result := lengthOfLastWord("Hello World")
	if result != 5 {
		t.Fatal("World's length is 5")
	}
}

func TestLengthOfLastWord1(t *testing.T) {
	result := lengthOfLastWord("   fly me   to   the moon  ")
	if result != 4 {
		t.Fatal("moon's length is 4")
	}
}

func TestLengthOfLastWord2(t *testing.T) {
	result := lengthOfLastWord("luffy is still joyboy")
	if result != 6 {
		t.Fatal("joyboy's length is 6")
	}
}
