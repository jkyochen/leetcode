package leetcode

import "sort"

var subsetsWithDups = []func(nums []int) [][]int{
	subsetsWithDup,
}

func subsetsWithDup(nums []int) [][]int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})
	result := [][]int{}
	var dfs func(sub []int, start int)
	dfs = func(sub []int, start int) {
		newSub := make([]int, len(sub))
		copy(newSub, sub)

		if len(newSub) == len(nums) {
			result = append(result, newSub)
			return
		}

		result = append(result, newSub)

		for i := start; i < len(nums); i++ {
			if i != start && nums[i] == nums[i-1] {
				continue
			}
			dfs(append(sub, nums[i]), i+1)
		}
	}
	dfs([]int{}, 0)
	return result
}
