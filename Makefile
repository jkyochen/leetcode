
.PHONY: fmt
fmt:
	go fmt ./...

.PHONY: test
test:
	make fmt
	cd leetcode && ls | grep -E '.*$(flt).*|helper*' | xargs go test -v
