package leetcode

var subsetss = []func(nums []int) [][]int{
	subsets,
}

func subsets(nums []int) [][]int {
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
			dfs(append(sub, nums[i]), i+1)
		}
	}
	dfs([]int{}, 0)
	return result
}
