package leetcode

var sortColorss = []func(nums []int){
	sortColors,
}

func sortColors(nums []int) {
	redLow := 0
	for fast := 0; fast < len(nums); fast++ {
		if nums[fast] == 0 {
			nums[fast], nums[redLow] = nums[redLow], nums[fast]
			redLow++
		}
	}
	for low, fast := redLow, redLow; fast < len(nums); fast++ {
		if nums[fast] == 1 {
			nums[fast], nums[low] = nums[low], nums[fast]
			low++
		}
	}
}
