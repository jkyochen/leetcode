package leetcode

import "sort"

var mergeIntervalss = []func(intervals [][]int) [][]int{
	mergeIntervals,
	mergeIntervals1,
}

func mergeIntervals(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	merged := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		mVal, val := merged[len(merged)-1], intervals[i]
		if mVal[1] >= val[0] || mVal[1]+1 == val[0] {
			mVal[1] = Max(mVal[1], val[len(val)-1])
		} else {
			merged = append(merged, val)
		}
	}
	return merged
}

func mergeIntervals1(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	merged := [][]int{}
	for i := 0; i < len(intervals); i++ {
		L, R := intervals[i][0], intervals[i][1]
		if len(merged) == 0 || (merged[len(merged)-1][1]+1 != L && merged[len(merged)-1][1] < L) {
			merged = append(merged, []int{L, R})
		} else {
			merged[len(merged)-1][1] = Max(merged[len(merged)-1][1], R)
		}
	}
	return merged
}
