package leetcode

var combines = []func(n int, k int) [][]int{
	combine,
	combine1,
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

func combine1(n int, k int) [][]int {
	ans := [][]int{}
	temp := []int{}
	var dfs func(cur int)
	dfs = func(cur int) {
		if len(temp)+(n-cur+1) < k {
			return
		}
		if len(temp) == k {
			comb := make([]int, k)
			copy(comb, temp)
			ans = append(ans, comb)
			return
		}
		// pick curent
		temp = append(temp, cur)
		dfs(cur + 1)
		temp = temp[:len(temp)-1]
		// no pick current, pick next
		dfs(cur + 1)
	}
	dfs(1)
	return ans
}

// TOD Lexicographic order method
