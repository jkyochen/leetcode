package leetcode

var sortColorss = []func(nums []int){
	sortColors,
	sortColors1,
	sortColors2,
	sortColors3,
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

func sortColors2(nums []int) {
	for red, white, i := 0, 0, 0; i < len(nums); i++ {
		if nums[i] == 0 {
			nums[i], nums[red] = nums[red], nums[i]
			if red < white {
				nums[i], nums[white] = nums[white], nums[i]
			}
			white++
			red++
		} else if nums[i] == 1 {
			nums[i], nums[white] = nums[white], nums[i]
			white++
		}
	}
}

func sortColors3(nums []int) {
	for p0, p2, i := 0, len(nums)-1, 0; i <= p2; i++ {
		for ; i <= p2 && nums[i] == 2; p2-- {
			nums[i], nums[p2] = nums[p2], nums[i]
		}
		if nums[i] == 0 {
			nums[i], nums[p0] = nums[p0], nums[i]
			p0++
		}
	}
}
