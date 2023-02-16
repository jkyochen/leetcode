package leetcode

import "strings"

var lengthOfLastWords = []func(s string) int{
	lengthOfLastWord1,
	lengthOfLastWord2,
	lengthOfLastWord3,
	lengthOfLastWord4,
}

func lengthOfLastWord1(s string) int {
	s = strings.TrimRight(s, " ")
	strs := strings.Split(s, " ")
	return len(strs[len(strs)-1])
}

func lengthOfLastWord2(s string) int {
	s = strings.TrimRight(s, " ")
	return len(s) - 1 - strings.LastIndex(s, " ")
}

func lengthOfLastWord3(s string) int {
	lastWordLen := 0
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == ' ' {
			if lastWordLen == 0 {
				continue
			}
			break
		}
		lastWordLen++
	}
	return lastWordLen
}

func lengthOfLastWord4(s string) (lastWordLen int) {
	i := len(s) - 1
	for i >= 0 && s[i] == ' ' {
		i--
	}

	for i >= 0 && s[i] != ' ' {
		i--
		lastWordLen++
	}
	return
}
