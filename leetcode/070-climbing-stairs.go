package leetcode

var climbStairss = []func(a int) int{
	climbStairs,
}

var climbCache = make(map[int]int)

func climbStairs(n int) int {
	if n == 1 {
		return 1
	}
	if n == 2 {
		return 2
	}

	res1, b1 := climbCache[n-1]
	if !b1 {
		res1 = climbStairs(n - 1)
		climbCache[n-1] = res1
	}

	res2, b2 := climbCache[n-2]
	if !b2 {
		res2 = climbStairs(n - 2)
		climbCache[n-2] = res2
	}

	return res1 + res2
}
