package leetcode

import (
	"strings"
)

var addBinarys = []func(a string, b string) string{
	addBinary,
}

func addBinary(a string, b string) string {
	i, j := len(a)-1, len(b)-1
	maxLen := 0
	if i > j {
		maxLen = i + 2
	} else {
		maxLen = j + 2
	}
	s := make([]string, maxLen)

	carry := 0
	for i >= 0 || j >= 0 {

		result := carry
		if i >= 0 && j >= 0 {
			result += int(a[i]-'0') + int(b[j]-'0')
		} else if i >= 0 {
			result += int(a[i] - '0')
		} else if j >= 0 {
			result += int(b[j] - '0')
		}

		if result == 3 {
			s = append(s, "1")
			carry = 1
		} else if result == 2 {
			s = append(s, "0")
			carry = 1
		} else if result == 1 {
			s = append(s, "1")
			carry = 0
		} else {
			s = append(s, "0")
			carry = 0
		}
		i--
		j--
	}

	if carry == 1 {
		s = append(s, "1")
	}

	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}

	return strings.Join(s, "")
}
