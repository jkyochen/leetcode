package leetcode

import (
	"testing"
)

func TestPlusOne(t *testing.T) {
	tests := []struct {
		args    []int
		expected []int
	}{
		{
			args:    []int{1, 2, 3},
			expected: []int{1, 2, 4},
		},
		{
			args:    []int{4, 3, 2, 1},
			expected: []int{4, 3, 2, 2},
		},
		{
			args:    []int{0},
			expected: []int{1},
		},
		{
			args:    []int{9, 9},
			expected: []int{1, 0, 0},
		},
	}

	for _, tc := range tests {
		for _, v := range plusOnes {
			result := v(append([]int{}, tc.args...))
			if !Equal(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
