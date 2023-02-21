package leetcode

import (
	"testing"
)

func TestClimbStairs1(t *testing.T) {
	tests := []struct {
		args1    []int
		args2    int
		args3    []int
		args4    int
		expected []int
	}{
		{
			args1:    []int{1, 2, 3, 0, 0, 0},
			args2:    3,
			args3:    []int{2, 5, 6},
			args4:    3,
			expected: []int{1, 2, 2, 3, 5, 6},
		},
		{
			args1:    []int{1},
			args2:    1,
			args3:    []int{},
			args4:    0,
			expected: []int{1},
		},
		{
			args1:    []int{0},
			args2:    0,
			args3:    []int{1},
			args4:    1,
			expected: []int{1},
		},
	}

	for _, tc := range tests {
		for _, v := range merges {
			newTc := tc
			v(newTc.args1, newTc.args2, newTc.args3, newTc.args4)
			if !Equal(newTc.args1, newTc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args1, tc.expected, tc.args1)
			}
		}
	}
}
