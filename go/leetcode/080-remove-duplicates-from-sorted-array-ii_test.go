package leetcode

import (
	"testing"
)

func TestRemoveDuplicates(t *testing.T) {
	tests := []struct {
		args     []int
		expected []int
	}{
		{
			args:     []int{1, 1, 1, 2, 2, 3},
			expected: []int{1, 1, 2, 2, 3},
		},
		{
			args:     []int{0, 0, 1, 1, 1, 1, 2, 3, 3},
			expected: []int{0, 0, 1, 1, 2, 3, 3},
		},
	}

	for _, tc := range tests {
		for _, v := range removeDuplicatess {
			newLen := v(tc.args)
			result := tc.args[:newLen]
			if !Equal(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
