package leetcode

var sortColorss = []func(nums []int){
	sortColors,
}

func sortColors(nums []int) {
	ptr := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			nums[i], nums[ptr] = nums[ptr], nums[i]
			ptr++
		}
	}
	for i := ptr; i < len(nums); i++ {
		if nums[i] == 1 {
			nums[i], nums[ptr] = nums[ptr], nums[i]
			ptr++
		}
	}
}
