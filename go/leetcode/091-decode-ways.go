package leetcode

import (
	"strconv"
	"strings"
)

var numDecodingss = []func(s string) int{
	numDecodings,
}

// spend longer time
func numDecodings(s string) int {
	strs := strings.Split(s, "")
	nums := make([]int, len(strs))
	for i, v := range strs {
		n, err := strconv.Atoi(v)
		if err != nil {
			break
		}
		nums[i] = n
	}

	total := 0
	var dfs func(start int)
	dfs = func(start int) {
		if start == len(nums) {
			total++
			return
		}
		if nums[start] == 0 {
			return
		}

		// pick one sum
		dfs(start + 1)

		// pick two num
		if start+1 >= len(nums) {
			return
		}
		v := nums[start]*10 + nums[start+1]
		if v >= 1 && v <= 26 {
			dfs(start + 2)
		}
	}
	dfs(0)
	return total
}
