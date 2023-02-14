package leetcode

import (
	"reflect"
	"runtime"
	"strings"
	"testing"
)

func TestLengthOfLastWord(t *testing.T) {
	tests := []struct {
		s    string
		want int
	}{
		{
			s:    "Hello World",
			want: 5,
		},
		{
			s:    "   fly me   to   the moon  ",
			want: 4,
		},
		{
			s:    "luffy is still joyboy",
			want: 6,
		},
	}

	for _, tc := range tests {
		for i := 0; i < len(Funcs); i++ {
			result := Funcs[i](tc.s)
			if result != tc.want {
				t.Fatalf(`Test func:"%s" case:"%s" failed — Expected %d, got %d`, GetFunctionName(Funcs[i]), tc.s, tc.want, result)
			}
		}
	}
}

func GetFunctionName(i interface{}) string {
	strs := strings.Split((runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()), ".")
	return strs[len(strs)-1]
}
