
.PHONY: fmt
fmt:
	go fmt ./...

.PHONY: test
test:
	make fmt
	cd leetcode && ls | grep -E '.*$(filter-out $@,$(MAKECMDGOALS)).*|helper*' | xargs go test -v

%:
	@true
