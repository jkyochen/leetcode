package leetcode

import (
	"strconv"
	"strings"
)

var restoreIpAddressess = []func(s string) []string{
	restoreIpAddresses,
}

func restoreIpAddresses(s string) []string {
	strs := strings.Split(s, "")

	total := []string{}
	var dfs func(start int, segment int, ip []string)
	dfs = func(start int, segment int, ip []string) {
		if segment == 5 && start == len(strs) {
			total = append(total, strings.Join(ip, "."))
			return
		}
		if segment >= 5 || start >= len(strs) {
			return
		}

		// pick one
		dfs(start+1, segment+1, append(ip, strs[start]))

		// pick two
		if start+2 > len(strs) {
			return
		}
		pickTwo := strings.Join(strs[start:start+2], "")
		if isValidIpSegment(pickTwo) {
			dfs(start+2, segment+1, append(ip, pickTwo))
		}

		// pick three
		if start+3 > len(strs) {
			return
		}
		pickThree := strings.Join(strs[start:start+3], "")
		if isValidIpSegment(pickThree) {
			dfs(start+3, segment+1, append(ip, pickThree))
		}
	}
	dfs(0, 1, []string{})
	return total
}

func isValidIpSegment(str string) bool {
	if len(str) > 1 && str[0] == '0' {
		return false
	}
	n, err := strconv.Atoi(str)
	if err != nil {
		return false
	}
	if n >= 0 && n <= 255 {
		return true
	}
	return false
}
