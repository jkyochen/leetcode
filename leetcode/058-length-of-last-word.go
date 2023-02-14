package leetcode

import "strings"

func lengthOfLastWord(s string) int {
	s = strings.TrimRight(s, " ")
	strs := strings.Split(s, " ")
	return len(strs[len(strs)-1])
}
