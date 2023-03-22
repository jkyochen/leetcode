package leetcode

import (
	"sort"
	"testing"
)

func TestCombine(t *testing.T) {
	tests := []struct {
		args     int
		args2    int
		expected [][]int
	}{
		{
			args:  4,
			args2: 2,
			expected: [][]int{
				{2, 4},
				{3, 4},
				{2, 3},
				{1, 2},
				{1, 3},
				{1, 4},
			},
		},
		{
			args:     1,
			args2:    1,
			expected: [][]int{{1}},
		},
		{
			args:     5,
			args2:    4,
			expected: [][]int{{1, 2, 3, 4}, {1, 2, 3, 5}, {1, 2, 4, 5}, {1, 3, 4, 5}, {2, 3, 4, 5}},
		},
	}

	for _, tc := range tests {
		for _, v := range combines {
			result := v(tc.args, tc.args2)
			sort.Slice(result, func(i, j int) bool {
				if result[i][0] == result[j][0] {
					return result[i][1] < result[j][1]
				}
				return result[i][0] < result[j][0]
			})
			sort.Slice(tc.expected, func(i, j int) bool {
				if tc.expected[i][0] == tc.expected[j][0] {
					return tc.expected[i][1] < tc.expected[j][1]
				}
				return tc.expected[i][0] < tc.expected[j][0]
			})
			if !EqualArray(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
