package leetcode

import "sort"

var mergeIntervalss = []func(intervals [][]int) [][]int{
	mergeIntervals,
}

func mergeIntervals(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	merged := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		val := intervals[i]
		mInterval := merged[len(merged)-1]
		mEnd := mInterval[len(mInterval)-1]
		if val[0] <= mEnd || val[0]+1 == mEnd {
			mInterval[len(mInterval)-1] = Max(mInterval[len(mInterval)-1], val[len(val)-1])
		} else {
			merged = append(merged, val)
		}
	}
	return merged
}
