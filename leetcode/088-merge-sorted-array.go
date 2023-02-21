package leetcode

var merges = []func(nums1 []int, m int, nums2 []int, n int){
	merge,
}

func merge(nums1 []int, m int, nums2 []int, n int) {
	j := 0
	for i := 0; i < n; i++ {
		for ; j < m+i; j++ {
			if nums2[i] < nums1[j] {
				if j != m+n-1 {
					copy(nums1[j+1:], nums1[j:])
				}
				nums1[j] = nums2[i]
				break
			}
		}
		if j == m+i {
			nums1[j] = nums2[i]
		}
	}
}
