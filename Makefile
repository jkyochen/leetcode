
.PHONY: all
all: go js ruby

.PHONY: install
install:
	cd js && npm install

.PHONY: go
go:
	cd go && make test $(filter-out $@,$(MAKECMDGOALS))

.PHONY: js
js:
	cd js && yarn test $(filter-out $@,$(MAKECMDGOALS))

.PHONY: ruby
ruby:
	cd ruby && ruby run_tests.rb $(filter-out $@,$(MAKECMDGOALS))

%:
	@true
