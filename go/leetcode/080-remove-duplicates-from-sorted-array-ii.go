package leetcode

var removeDuplicatess = []func(nums []int) int{
	removeDuplicates,
	removeDuplicates1,
}

func removeDuplicates(nums []int) int {
	newLen := len(nums)
	for i := 2; i < newLen; i++ {
		if nums[i] != nums[i-2] {
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

func removeDuplicates1(nums []int) int {
	n := len(nums)
	if n <= 2 {
		return n
	}

	slow, fast := 2, 2
	for ; fast < n; fast++ {
		if nums[slow-2] != nums[fast] {
			nums[slow] = nums[fast]
			slow++
		}
	}
	return slow
}
