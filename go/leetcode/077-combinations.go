package leetcode

var combines = []func(n int, k int) [][]int{
	combine,
}

func combine(n int, k int) [][]int {
	result := [][]int{}
	var innerCombine func(sub []int, start int)
	innerCombine = func(sub []int, start int) {
		if len(sub) == k {
			newSub := make([]int, len(sub))
			copy(newSub, sub)
			result = append(result, newSub)
			return
		}
		for i := start; i <= n; i++ {
			innerCombine(append(sub, i), i+1)
		}
	}
	innerCombine([]int{}, 1)
	return result
}
