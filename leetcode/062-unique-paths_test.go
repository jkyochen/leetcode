package leetcode

import (
	"testing"
)

func TestUniquePaths(t *testing.T) {
	tests := []struct {
		args     int
		args2    int
		expected int
	}{
		{
			args:     3,
			args2:    7,
			expected: 28,
		},
		{
			args:     3,
			args2:    2,
			expected: 3,
		},
	}

	for _, tc := range tests {
		for _, v := range uniquePathss {
			result := v(tc.args, tc.args2)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
