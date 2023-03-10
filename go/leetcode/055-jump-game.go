package leetcode

var canJumps = []func(nums []int) bool{
	canJump,
	canJump1,
	canJump2,
}

func canJump(nums []int) bool {
	endIndex := len(nums) - 1
	isCanJump := false
	var recursion func(index int)
	recursion = func(index int) {
		if index == endIndex {
			isCanJump = true
			return
		}
		if isCanJump || nums[index] == 0 {
			return
		}
		for i := 1; i <= nums[index]; i++ {
			recursion(index + i)
		}
	}
	recursion(0)
	return isCanJump
}

func canJump1(nums []int) bool {
	if len(nums) == 1 {
		return true
	}
	maxPos := nums[0]
	for i := 0; i < maxPos; i++ {
		for j := i + 1; j <= i+nums[i] && j < len(nums); j++ {
			maxPos = Max(maxPos, j+nums[j])
		}
		if maxPos >= len(nums)-1 {
			return true
		}
	}
	return false
}

func canJump2(nums []int) bool {
	rightMost := 0
	for i := 0; i < len(nums); i++ {
		if i <= rightMost {
			rightMost = Max(rightMost, i+nums[i])
			if rightMost >= len(nums)-1 {
				return true
			}
		}
	}
	return false
}
