package leetcode

var setZeroess = []func(matrix [][]int){
	setZeroes,
	setZeroes1,
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

func setZeroes1(matrix [][]int) {
	row := make([]bool, len(matrix))
	col := make([]bool, len(matrix[0]))
	for i, r := range matrix {
		for j, v := range r {
			if v == 0 {
				row[i] = true
				col[j] = true
			}
		}
	}
	for i, r := range matrix {
		for j := range r {
			if row[i] || col[j] {
				r[j] = 0
			}
		}
	}
}

// TODO 1. two marker variables

// TODO 2. one marker variables
