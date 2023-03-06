package leetcode

var mergeIntervalss = []func(intervals [][]int) [][]int{
	mergeIntervals,
}

func mergeIntervals(intervals [][]int) [][]int {
	mergedIntervals := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		val := intervals[i]
		mInterval := mergedIntervals[len(mergedIntervals)-1]
		mEnd := mInterval[len(mInterval)-1]
		if val[0] <= mEnd || val[0]+1 == mEnd {
			mInterval[len(mInterval)-1] = Max(mInterval[len(mInterval)-1], val[len(val)-1])
		} else {
			mergedIntervals = append(mergedIntervals, val)
		}
	}
	return mergedIntervals
}
