package leetcode

import "math"

var minPathSums = []func(grid [][]int) int{
	minPathSum,
}

func minPathSum(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	minSum := math.MaxInt
	var recursion func(x int, y int, sum int)
	recursion = func(x int, y int, sum int) {
		if x >= m || y >= n {
			return
		}
		sum += grid[x][y]
		if x == m-1 && y == n-1 {
			minSum = Min(minSum, sum)
			return
		}
		recursion(x+1, y, sum)
		recursion(x, y+1, sum)
	}
	recursion(0, 0, 0)
	return minSum
}
