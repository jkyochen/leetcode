package leetcode

import "sort"

var searchMatrixs = []func(matrix [][]int, target int) bool{
	searchMatrix,
	searchMatrix1,
	searchMatrix2,
	searchMatrix3,
	searchMatrix4,
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

func searchMatrix1(matrix [][]int, target int) bool {
	low := -1
	for high := len(matrix) - 1; low < high; {
		mid := (high + low + 1) / 2
		if matrix[mid][0] <= target {
			low = mid
		} else {
			high = mid - 1
		}
	}
	if low < 0 {
		return false
	}

	row := matrix[low]
	for i, j := 0, len(row)-1; i <= j; {
		yMid := (i + j) / 2
		if row[yMid] == target {
			return true
		} else if row[yMid] > target {
			j = yMid - 1
		} else {
			i = yMid + 1
		}
	}
	return false
}

func searchMatrix2(matrix [][]int, target int) bool {
	row := sort.Search(len(matrix), func(i int) bool { return matrix[i][0] > target }) - 1
	if row < 0 {
		return false
	}
	col := sort.SearchInts(matrix[row], target)
	return col < len(matrix[row]) && matrix[row][col] == target
}

func searchMatrix3(matrix [][]int, target int) bool {
	m, n := len(matrix), len(matrix[0])
	for low, high := 0, m*n-1; low <= high; {
		mid := (low + high) / 2
		v := matrix[mid/n][mid%n]
		if v == target {
			return true
		} else if v < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return false
}

func searchMatrix4(matrix [][]int, target int) bool {
	m, n := len(matrix), len(matrix[0])
	index := sort.Search(m*n-1, func(i int) bool {
		return matrix[i/n][i%n] >= target
	})
	return index < m*n && matrix[index/n][index%n] == target
}
