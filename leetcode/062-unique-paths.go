package leetcode

var uniquePathss = []func(m int, n int) int{
	uniquePaths,
}

func uniquePaths(m int, n int) int {
	uniquePathCount := 0
	var recursion func(x int, y int)
	recursion = func(x int, y int) {
		if x == m && y == n {
			uniquePathCount++
			return
		}
		if x < m {
			recursion(x+1, y)
		}
		if y < n {
			recursion(x, y+1)
		}
	}
	recursion(1, 1)
	return uniquePathCount
}

func uniquePaths1(m int, n int) int {
	uniquePathCount := 0
	var recursion func(x int, y int)
	recursion = func(x int, y int) {
		if x == m && y == n {
			uniquePathCount++
			return
		}
		if x < m {
			recursion(x+1, y)
		}
		if y < n {
			recursion(x, y+1)
		}
	}
	recursion(1, 1)
	return uniquePathCount
}
