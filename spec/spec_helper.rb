# require 'simplecov'
# require 'simplecov-console'
#
# SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new([
#   SimpleCov::Formatter::Console,
#
# ])
# SimpleCov.start

# Set the environment to "test"
# require_relative './setup_test_database'
# require_relative '../lib/database_connection'
#
# ENV['RACK_ENV'] = 'test'
# ENV['ENVIRONMENT'] = 'test'

# RSpec.configure do |config|
#   config.before(:each) do
#     setup_test_database
#   end
# end

# Bring in the contents of the `app.rb` file
require File.join(File.dirname(__FILE__), '..', 'app.rb')

require 'capybara'
require 'capybara/rspec'
require 'rspec'
# require 'simplecov'
#
Capybara.app = Chitter
