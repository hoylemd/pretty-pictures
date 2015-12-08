# Pretty-pictures

This is a pretty simple app to view the top 100 pretty pictures on 500px.
The rest of this README is mostly the default ember app readme.
It will be updated as it falls out of truthiness.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Bundler](http://bundler.io/)
* [Ruby](https://www.ruby-lang.org/en/) (for integration testing)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `make install`

## Running / Development

* `make serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Unit Tests

* `make test-unit`

### Installing Integration Tests

* `make install-capybara`

### Running Integration Tests

* `make test-capybara`

### Running all tests

* `make test`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* just do the Installation and Running sections in the environment you'd like to run it in.
* TODO: make an actual deployment process
