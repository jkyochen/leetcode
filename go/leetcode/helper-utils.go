package leetcode

import (
	"reflect"
	"runtime"
	"strings"
)

func GetFunctionName(i interface{}) string {
	strs := strings.Split(runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name(), ".")
	return strs[len(strs)-1]
}

func Equal[T comparable](a, b []T) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}

func EqualArray(a, b [][]int) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if !Equal(v, b[i]) {
			return false
		}
	}
	return true
}

func Max(a int, b int) int {
	if a >= b {
		return a
	}
	return b
}

func Min(a int, b int) int {
	if a <= b {
		return a
	}
	return b
}

func Contains(src []int, target int) bool {
	for _, v := range src {
		if v == target {
			return true
		}
	}
	return false
}

func CopyArray(src []int) (target []int) {
	target = make([]int, len(src))
	copy(target, src)
	return
}

func CopyTwoDimensionalArrays(src [][]int) (target [][]int) {
	target = make([][]int, len(src))
	for i := 0; i < len(src); i++ {
		target[i] = make([]int, len(src[i]))
		copy(target[i], src[i])
	}
	return
}
