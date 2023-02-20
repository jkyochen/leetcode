package leetcode

import "math"

var mySqrts = []func(a int) int{
	mySqrt,
	mySqrt1,
	mySqrt2,
}

func mySqrt(x int) int {
	for i, j := 0, x; i <= j; {

		mid := (i + j) / 2

		if mid*mid == x {
			return mid
		}

		b1 := mid*mid < x
		if b1 && (mid+1)*(mid+1) > x {
			return mid
		}

		if b1 {
			i = mid + 1
		} else {
			j = mid - 1
		}
	}
	return -1
}

func mySqrt1(x int) int {
	if x == 0 {
		return 0
	}
	result := int(math.Exp(0.5 * math.Log(float64(x))))
	if (result+1)*(result+1) <= x {
		return result + 1
	}
	return result
}

func mySqrt2(x int) int {
	result := -1
	l, r := 0, x
	for l <= r {
		mid := (l + r) / 2
		if mid*mid <= x {
			l = mid + 1
			result = mid
		} else {
			r = mid - 1
		}
	}
	return result
}

// TODO Newton's method
func mySqrt3(x int) int {
	return -1
}
