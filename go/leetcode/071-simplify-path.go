package leetcode

import (
	"strings"
)

var simplifyPaths = []func(path string) string{
	simplifyPath,
}

func simplifyPath(path string) string {
	paths := strings.Split(path, "/")
	stack := []string{}
	for _, v := range paths {
		if v == "" || v == "." {
			continue
		}
		if v == ".." {
			if len(stack) > 0 {
				stack = stack[0 : len(stack)-1]
			}
			continue
		}
		stack = append(stack, v)
	}
	return "/" + strings.Join(stack, "/")
}
