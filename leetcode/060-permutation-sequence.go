package leetcode

import (
	"strconv"
	"strings"
)

var getPermutations = []func(n int, k int) string{
	getPermutation,
}

func getPermutation(n int, k int) string {
	permutation := []string{}
	var recursion func(str string)
	recursion = func(str string) {
		if len(str) == n {
			permutation = append(permutation, str)
			return
		}
		for i := 1; i <= n; i++ {
			k := strconv.Itoa(i)
			if !strings.Contains(str, k) {
				str += k
				recursion(str)
				str = str[:len(str)-1]
			}
		}
	}
	recursion("")
	return permutation[k-1]
}
