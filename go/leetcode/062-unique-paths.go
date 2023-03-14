package leetcode

import (
	"fmt"
	"math/big"
)

var uniquePathss = []func(m int, n int) int{
	uniquePaths,
	uniquePaths1,
	uniquePaths2,
	uniquePaths3,
}

func uniquePaths(m int, n int) int {
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

func uniquePaths2(m int, n int) int {
	dpTable := make([][]int, m)
	for i := 0; i < m; i++ {
		dpTable[i] = make([]int, n)
		dpTable[i][0] = 1
	}
	for j := 0; j < n; j++ {
		dpTable[0][j] = 1
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
		}
	}

	return dpTable[m-1][n-1]
}

// Combinatorics
func uniquePaths3(m int, n int) int {
	return int(new(big.Int).Binomial(int64(m+n-2), int64(n-1)).Int64())
}
