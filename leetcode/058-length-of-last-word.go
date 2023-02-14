package leetcode

import "strings"

var Funcs = []func(s string) int{
	lengthOfLastWord1,
}

func lengthOfLastWord1(s string) int {
	s = strings.TrimRight(s, " ")
	strs := strings.Split(s, " ")
	return len(strs[len(strs)-1])
}
