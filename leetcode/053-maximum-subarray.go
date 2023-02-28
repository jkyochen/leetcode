package leetcode

import "math"

var maxSubArrays = []func(nums []int) int{
	maxSubArray,
}

func maxSubArray(nums []int) int {
	maxValue := math.MinInt
	for i := 0; i < len(nums); i++ {
		curValue := nums[i]
		maxValue = Max(maxValue, curValue)
		for j := i + 1; j < len(nums); j++ {
			curValue += nums[j]
			maxValue = Max(maxValue, curValue)
		}
	}
	return maxValue
}
