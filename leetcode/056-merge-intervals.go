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
		mVal, val := merged[len(merged)-1], intervals[i]
		mEnd := mVal[len(mVal)-1]
		if val[0] <= mEnd || val[0]+1 == mEnd {
			mVal[len(mVal)-1] = Max(mVal[len(mVal)-1], val[len(val)-1])
		} else {
			merged = append(merged, val)
		}
	}
	return merged
}
