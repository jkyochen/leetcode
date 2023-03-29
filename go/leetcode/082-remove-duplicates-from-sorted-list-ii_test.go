package leetcode

import (
	"testing"
)

func TestDeleteDuplicate2s(t *testing.T) {
	tests := []struct {
		args     []int
		expected []int
	}{
		{
			args:     []int{1, 2, 3, 3, 4, 4, 5},
			expected: []int{1, 2, 5},
		},
		{
			args:     []int{1, 1, 1, 2, 3},
			expected: []int{2, 3},
		},
		{
			args:     []int{1, 1},
			expected: nil,
		},
	}

	for _, tc := range tests {
		for _, v := range deleteDuplicates2s {
			result := v(ArrayToSinglyLinked(tc.args))
			if !Equal(SinglyLinkedToArray(result), tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, SinglyLinkedToArray(result))
			}
		}
	}
}
