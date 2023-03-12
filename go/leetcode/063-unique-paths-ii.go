package leetcode

var uniquePathsWithObstacless = []func(obstacleGrid [][]int) int{
	uniquePathsWithObstacles,
}

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m, n := len(obstacleGrid), len(obstacleGrid[0])
	dpTable := make([][]int, m)
	for i := 0; i < m; i++ {
		dpTable[i] = make([]int, n)
		if i != 0 && dpTable[i-1][0] == 0 {
			dpTable[i][0] = 0
			continue
		}
		dpTable[i][0] = 1 - obstacleGrid[i][0]
	}
	for j := 1; j < n; j++ {
		if dpTable[0][j-1] == 0 {
			dpTable[0][j] = 0
			continue
		}
		dpTable[0][j] = 1 - obstacleGrid[0][j]
	}
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if obstacleGrid[i][j] == 1 {
				dpTable[i][j] = 0
				continue
			}
			dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
		}
	}
	return dpTable[m-1][n-1]
}
