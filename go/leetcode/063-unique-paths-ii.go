package leetcode

var uniquePathsWithObstacless = []func(obstacleGrid [][]int) int{
	uniquePathsWithObstacles,
	uniquePathsWithObstacles1,
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

// scroll array
func uniquePathsWithObstacles1(obstacleGrid [][]int) int {
	n, m := len(obstacleGrid), len(obstacleGrid[0])
	f := make([]int, m)
	if obstacleGrid[0][0] == 0 {
		f[0] = 1
	}
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if obstacleGrid[i][j] == 1 {
				f[j] = 0
				continue
			}
			if j-1 >= 0 && obstacleGrid[i][j-1] == 0 {
				f[j] += f[j-1]
			}
		}
	}
	return f[len(f)-1]
}
