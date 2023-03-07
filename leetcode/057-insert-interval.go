package leetcode

import "sort"

var insertIntervals = []func(intervals [][]int, newInterval []int) [][]int{
	insertInterval,
}

func insertInterval(intervals [][]int, newInterval []int) [][]int {
	inserted := [][]int{}
	for i := 0; i < len(intervals); i++ {
		L, R := intervals[i][0], intervals[i][1]
		if newInterval[1] < L || newInterval[0] > R {
			inserted = append(inserted, intervals[i])
		} else {
			newInterval = []int{Min(L, newInterval[0]), Max(R, newInterval[1])}
		}
	}
	inserted = append(inserted, newInterval)
	sort.Slice(inserted, func(i, j int) bool {
		return inserted[i][0] <= inserted[j][0]
	})
	return inserted
}
