package leetcode

import (
	"fmt"
	"math/big"
	"strconv"
	"strings"
)

var addBinarys = []func(a string, b string) string{
	addBinary,
	addBinary1,
	addBinary2,
	addBinary3,
}

func addBinary(a string, b string) string {
	i, j := len(a)-1, len(b)-1
	maxLen := 0
	if i > j {
		maxLen = i + 2
	} else {
		maxLen = j + 2
	}
	s := make([]string, maxLen)

	carry := 0
	for i >= 0 || j >= 0 {

		result := carry
		if i >= 0 && j >= 0 {
			result += int(a[i]-'0') + int(b[j]-'0')
		} else if i >= 0 {
			result += int(a[i] - '0')
		} else if j >= 0 {
			result += int(b[j] - '0')
		}

		if result == 3 {
			s = append(s, "1")
			carry = 1
		} else if result == 2 {
			s = append(s, "0")
			carry = 1
		} else if result == 1 {
			s = append(s, "1")
			carry = 0
		} else {
			s = append(s, "0")
			carry = 0
		}
		i--
		j--
	}

	if carry == 1 {
		s = append(s, "1")
	}

	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}

	return strings.Join(s, "")
}

func addBinary1(a string, b string) string {
	result := ""
	carry := 0
	lenA, lenB := len(a), len(b)
	n := Max(lenA, lenB)

	for i := 0; i < n; i++ {
		if i < lenA {
			carry += int(a[lenA-1-i] - '0')
		}
		if i < lenB {
			carry += int(b[lenB-1-i] - '0')
		}
		result = strconv.Itoa(carry%2) + result
		carry /= 2
	}
	if carry > 0 {
		result = "1" + result
	}
	return result
}

func addBinary2(a string, b string) string {
	aBig, ok1 := new(big.Int).SetString(a, 2)
	bBig, ok2 := new(big.Int).SetString(b, 2)
	if !ok1 || !ok2 {
		panic("SetString: error")
	}
	return fmt.Sprintf("%b", new(big.Int).Add(aBig, bBig))
}

func addBinary3(a string, b string) string {
	x := new(big.Int)
	x.SetString(a, 2)

	y := new(big.Int)
	y.SetString(b, 2)

	zero := big.NewInt(0)

	for y.Cmp(zero) != 0 {
		answer := new(big.Int)
		answer.Xor(x, y)

		carry := new(big.Int)
		carry.And(x, y)
		carry.Lsh(carry, 1)

		x, y = answer, carry
	}

	return x.Text(2)
}
