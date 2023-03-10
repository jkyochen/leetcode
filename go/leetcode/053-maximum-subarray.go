package leetcode

import "math"

var maxSubArrays = []func(nums []int) int{
	maxSubArray,
	maxSubArray1,
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

func maxSubArray1(nums []int) int {
	max := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i]+nums[i-1] > nums[i] {
			nums[i] += nums[i-1]
		}
		if nums[i] > max {
			max = nums[i]
		}
	}
	return max
}

// TODO segment tree
