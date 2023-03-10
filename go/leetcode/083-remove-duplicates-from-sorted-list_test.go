package leetcode

import (
	"testing"
)

func TestDeleteDuplicates(t *testing.T) {
	tests := []struct {
		args     []int
		expected []int
	}{
		{
			args:     []int{1, 1, 2},
			expected: []int{1, 2},
		},
	}

	for _, tc := range tests {
		for _, v := range deleteDuplicatess {
			result := v(ArrayToSinglyLinked(tc.args))
			if !Equal(SinglyLinkedToArray(result), tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, SinglyLinkedToArray(result))
			}
		}
	}
}
