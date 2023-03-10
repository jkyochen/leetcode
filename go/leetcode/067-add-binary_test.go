package leetcode

import (
	"testing"
)

func TestAddBinary(t *testing.T) {
	tests := []struct {
		args1    string
		args2    string
		expected string
	}{
		{
			args1:    "11",
			args2:    "1",
			expected: "100",
		},
		{
			args1:    "1010",
			args2:    "1011",
			expected: "10101",
		},
	}

	for _, tc := range tests {
		for _, v := range addBinarys {
			result := v(tc.args1, tc.args2)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args1+","+tc.args2, tc.expected, result)
			}
		}
	}
}
