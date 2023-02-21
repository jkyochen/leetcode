package leetcode

import "sort"

var merges = []func(nums1 []int, m int, nums2 []int, n int){
	merge,
	merge1,
	merge2,
	merge3,
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

func merge1(nums1 []int, m int, nums2 []int, n int) {
	copy(nums1[m:], nums2[0:])
	sort.Ints(nums1)
}

func merge2(nums1 []int, m int, nums2 []int, n int) {
	sorted := make([]int, 0, m+n)
	p1, p2 := 0, 0
	for {
		if p1 == m {
			sorted = append(sorted, nums2[p2:]...)
			break
		}
		if p2 == n {
			sorted = append(sorted, nums1[p1:]...)
			break
		}
		if nums1[p1] <= nums2[p2] {
			sorted = append(sorted, nums1[p1])
			p1++
		} else {
			sorted = append(sorted, nums2[p2])
			p2++
		}
	}
	copy(nums1, sorted)
}

func merge3(nums1 []int, m int, nums2 []int, n int) {
	for i, j := m-1, n-1; i >= 0 || j >= 0; {
		if j == -1 || i != -1 && nums1[i] > nums2[j] {
			nums1[i+j+1] = nums1[i]
			i--
		} else {
			nums1[i+j+1] = nums2[j]
			j--
		}
	}
}
