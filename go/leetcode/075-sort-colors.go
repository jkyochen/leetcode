package leetcode

var sortColorss = []func(nums []int){
	sortColors,
	sortColors1,
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

func sortColors1(nums []int) {
	var innerSortColor = func(colors []int, target int) (ptr int) {
		for i, v := range colors {
			if v == target {
				colors[i], colors[ptr] = colors[ptr], colors[i]
				ptr++
			}
		}
		return
	}
	ptr := innerSortColor(nums, 0)
	innerSortColor(nums[ptr:], 1)
}
