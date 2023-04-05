package leetcode

import (
	"strconv"
	"strings"
)

var numDecodingss = []func(s string) int{
	numDecodings,
	numDecodings1,
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

		// pick one num
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

func numDecodings1(s string) int {
	strs := strings.Split(s, "")
	nums := make([]int, len(strs))
	for i, v := range strs {
		n, err := strconv.Atoi(v)
		if err != nil {
			break
		}
		nums[i] = n
	}

	dp := make([]int, len(nums))

	for i := len(nums) - 1; i >= 0; i-- {
		if nums[i] == 0 {
			dp[i] = 0
			continue
		}
		if i == len(nums)-1 {
			dp[i] = 1
			continue
		}
		if nums[i]*10+nums[i+1] > 26 {
			dp[i] = dp[i+1]
			continue
		}
		if i == len(nums)-2 {
			dp[i] = dp[i+1] + 1
			continue
		}
		dp[i] = dp[i+1] + dp[i+2]
	}

	return dp[0]
}
