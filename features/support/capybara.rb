require 'capybara/cucumber'
require 'capybara/poltergeist'
Capybara.javascript_driver = :poltergeist
Capybara.default_driver = :poltergeist
Capybara.app_host = "http://localhost:4200"
