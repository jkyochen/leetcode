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
	var recursion func(x int, y int) int
	recursion = func(x int, y int) int {
		if x == m && y == n {
			return 1
		}
		xRecurCount, yRecurCount := 0, 0
		if x < m {
			xRecurCount = recursion(x+1, y)
		}
		if y < n {
			yRecurCount = recursion(x, y+1)
		}
		return xRecurCount + yRecurCount
	}
	return recursion(1, 1)
}
