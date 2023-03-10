
.PHONY: all
all: go js

.PHONY: go
go:
	cd go && make test $(filter-out $@,$(MAKECMDGOALS))

.PHONY: js
js:
	cd js && yarn test $(filter-out $@,$(MAKECMDGOALS))

%:
	@true
