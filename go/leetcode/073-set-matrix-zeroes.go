package leetcode

var setZeroess = []func(matrix [][]int){
	setZeroes,
}

func setZeroes(matrix [][]int) {
	m, n := len(matrix), len(matrix[0])
	zeroXPoints := []int{}
	zeroYPoints := []int{}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if matrix[i][j] != 0 {
				continue
			}
			if !Contains(zeroXPoints, i) {
				zeroXPoints = append(zeroXPoints, i)
			}
			if !Contains(zeroYPoints, j) {
				zeroYPoints = append(zeroYPoints, j)
			}
		}
	}
	for _, x := range zeroXPoints {
		matrix[x] = make([]int, n)
	}
	for _, y := range zeroYPoints {
		for i := 0; i < m; i++ {
			matrix[i][y] = 0
		}
	}
}
