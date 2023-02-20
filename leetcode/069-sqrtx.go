package leetcode

var mySqrts = []func(a int) int{
	mySqrt,
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
