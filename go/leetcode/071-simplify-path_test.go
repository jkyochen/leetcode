package leetcode

import (
	"testing"
)

func TestSimplifyPath(t *testing.T) {
	tests := []struct {
		args     string
		expected string
	}{
		{
			args:     "/home/",
			expected: "/home",
		},
		{
			args:     "/../",
			expected: "/",
		},
		{
			args:     "/home//foo/",
			expected: "/home/foo",
		},
		{
			args:     "/a/./b/../../c/",
			expected: "/c",
		},
	}

	for _, tc := range tests {
		for _, v := range simplifyPaths {
			result := v(tc.args)
			if result != tc.expected {
				t.Fatalf(`Test func:"%s" case:"%v" failed — Expected %v, got %v`, GetFunctionName(v), tc.args, tc.expected, result)
			}
		}
	}
}
