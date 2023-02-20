package leetcode

import (
	"testing"
)

func TestMySqrt(t *testing.T) {
	tests := []struct {
		args     int
		expected int
	}{
		{
			args:     4,
			expected: 2,
		},
		{
			args:     8,
			expected: 2,
		},
	}

	for _, tc := range tests {
		for _, v := range mySqrts {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
