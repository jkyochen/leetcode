package leetcode

var plusOnes = []func(digits []int) []int{
	plusOne,
}

func plusOne(digits []int) []int {
	carry := 1
	for i := len(digits) - 1; i >= 0; i-- {
		if carry == 0 {
			break
		}
		if digits[i]+carry < 10 {
			digits[i] = digits[i] + carry
			carry = 0
			break
		}
		digits[i] = (digits[i] + carry) % 10
		carry = 1
	}
	if carry != 0 {
		digits = append([]int{carry}, digits...)
	}
	return digits
}

func plusOne1(digits []int) []int {
	var n = len(digits)
	for i := n - 1; i >= 0; i-- {
		if digits[i] != 9 {
			digits[i]++
			for j := i + 1; j < n; j++ {
				digits[j] = 0
			}
			return digits
		}
	}
	digits = make([]int, n+1)
	digits[0] = 1
	return digits
}
