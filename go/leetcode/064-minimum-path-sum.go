package leetcode

import "math"

var minPathSums = []func(grid [][]int) int{
	minPathSum,
	minPathSum1,
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

func minPathSum1(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	dpTable := make([][]int, m)
	for i := 0; i < m; i++ {
		dpTable[i] = make([]int, n)
		if i == 0 {
			dpTable[i][0] = grid[i][0]
			continue
		}
		dpTable[i][0] = dpTable[i-1][0] + grid[i][0]
	}
	for j := 1; j < n; j++ {
		dpTable[0][j] = dpTable[0][j-1] + grid[0][j]
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			dpTable[i][j] = grid[i][j] + Min(dpTable[i-1][j], dpTable[i][j-1])
		}
	}

	return dpTable[m-1][n-1]
}
