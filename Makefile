
.PHONY: fmt
fmt:
	go fmt ./...

.PHONY: test
test:
	make fmt
	go test ./... -v
