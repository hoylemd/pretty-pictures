install: bower.json package.json
	npm install
	bower install

install-capybara: Gemfile Gemfile.lock
	bundle install

install-all: install install-capybara

serve:
	ember server

test-unit:
	ember test

test-capybara:
	bundle exec cucumber

test: test-unit test-capybara

