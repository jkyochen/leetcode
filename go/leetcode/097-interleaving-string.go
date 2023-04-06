package leetcode

var isInterleaves = []func(s1 string, s2 string, s3 string) bool{
	isInterleave,
}

func isInterleave(s1 string, s2 string, s3 string) bool {
	if len(s1)+len(s2) != len(s3) {
		return false
	}

	isMatch := false
	var dfs func(index1 int, index2 int, index3 int)
	dfs = func(index1, index2, index3 int) {
		if isMatch {
			return
		}
		if index1 == len(s1) && index2 == len(s2) && index3 == len(s3) {
			isMatch = true
			return
		}
		if index1 < len(s1) && s1[index1] == s3[index3] {
			dfs(index1+1, index2, index3+1)
		}
		if index2 < len(s2) && s2[index2] == s3[index3] {
			dfs(index1, index2+1, index3+1)
		}
	}
	dfs(0, 0, 0)
	return isMatch
}
