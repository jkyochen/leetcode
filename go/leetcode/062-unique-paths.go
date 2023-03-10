package leetcode

import "fmt"

var uniquePathss = []func(m int, n int) int{
	uniquePaths,
	uniquePaths1,
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
	cache := make(map[string]int)
	var formatKey func(x int, y int) string
	formatKey = func(x, y int) string {
		return fmt.Sprintf("x=%d,y=%d", x, y)
	}
	var recursion func(x int, y int) int
	recursion = func(x int, y int) int {
		if v, b := cache[formatKey(x, y)]; b {
			return v
		}
		if x == m && y == n {
			return 1
		}
		xRecurCount, yRecurCount := 0, 0
		if x < m {
			xRecurCount = recursion(x+1, y)
			cache[formatKey(x+1, y)] = xRecurCount
		}
		if y < n {
			yRecurCount = recursion(x, y+1)
			cache[formatKey(x, y+1)] = yRecurCount
		}
		return xRecurCount + yRecurCount
	}
	return recursion(1, 1)
}
