# Set the environment to "test"
ENV['RACK_ENV'] = 'test'

# Bring in the contents of the `app.rb` file
require File.join(File.dirname(__FILE__), '..', 'app.rb')

require 'capybara'
require 'capybara/rspec'
require 'rspec'
require_relative '../app'

Capybara.server = :puma, { Silent: true }
Capybara.default_driver = :selenium
Capybara.app = Chitter
