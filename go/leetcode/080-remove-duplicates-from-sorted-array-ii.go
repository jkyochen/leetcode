package leetcode

var removeDuplicatess = []func(nums []int) int{
	removeDuplicates,
}

func removeDuplicates(nums []int) int {
	newLen := len(nums)
	for i := 2; i < newLen; i++ {
		if nums[i] != nums[i-1] || nums[i] != nums[i-2] {
			continue
		}

		tempLen := newLen
		temp := nums[i]
		for j, k := i, i; j < newLen; j++ {
			if nums[j] == temp {
				tempLen--
				continue
			}
			nums[k] = nums[j]
			k++
		}
		newLen = tempLen
	}
	return newLen
}
