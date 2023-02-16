package leetcode

import (
	"testing"
)

func TestPlusOne(t *testing.T) {
	tests := []struct {
		s    []int
		want []int
	}{
		{
			s:    []int{1, 2, 3},
			want: []int{1, 2, 4},
		},
		{
			s:    []int{4, 3, 2, 1},
			want: []int{4, 3, 2, 2},
		},
		{
			s:    []int{0},
			want: []int{1},
		},
		{
			s:    []int{9, 9},
			want: []int{1, 0, 0},
		},
	}

	for _, tc := range tests {
		for _, v := range plusOnes {
			result := v(append([]int{}, tc.s...))
			if !Equal(result, tc.want) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.s, tc.want, result)
			}
		}
	}
}
