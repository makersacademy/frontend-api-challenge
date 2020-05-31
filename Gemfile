# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
gem "sinatra"

group :test, :development do
  gem "capybara", group: :test
  gem "puma", "~> 4.0", group: :test
  gem "rspec", group: :test
  gem 'rubocop', '0.79.0'
  gem 'selenium-webdriver', group: :test
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
end
