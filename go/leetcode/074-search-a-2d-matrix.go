package leetcode

var searchMatrixs = []func(matrix [][]int, target int) bool{
	searchMatrix,
}

func searchMatrix(matrix [][]int, target int) bool {
	xMid := 0
	for i, j := 0, len(matrix)-1; i <= j; {
		xMid = (i + j) / 2
		if matrix[xMid][0] == target {
			return true
		}
		if matrix[xMid][0] > target {
			j = xMid - 1
		} else if matrix[xMid][len(matrix[xMid])-1] < target {
			i = xMid + 1
		} else {
			break
		}
	}
	for i, j := 0, len(matrix[xMid])-1; i <= j; {
		yMid := (i + j) / 2
		if matrix[xMid][yMid] == target {
			return true
		}
		if matrix[xMid][yMid] > target {
			j = yMid - 1
		} else {
			i = yMid + 1
		}
	}
	return false
}
