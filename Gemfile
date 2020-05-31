# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
gem "sinatra"

group :test, :development do
  gem "capybara"
  gem 'geckodriver-helper'
  gem "puma", "~> 4.0"
  gem "rspec"
  gem 'rubocop', '0.79.0'
  gem 'selenium-webdriver', '4.0.0.alpha6'
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
end
