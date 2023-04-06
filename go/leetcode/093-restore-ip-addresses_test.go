package leetcode

import (
	"testing"
)

func TestRestoreIpAddresses(t *testing.T) {
	tests := []struct {
		args     string
		expected []string
	}{
		{
			args:     "25525511135",
			expected: []string{"255.255.11.135", "255.255.111.35"},
		},
		{
			args:     "0000",
			expected: []string{"0.0.0.0"},
		},
		{
			args:     "101023",
			expected: []string{"1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"},
		},
	}

	for _, tc := range tests {
		for _, v := range restoreIpAddressess {
			result := v(tc.args)
			if !EqualString(result, tc.expected) {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
