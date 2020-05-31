require 'sinatra/base'
# require './config/environment'

# Global for verbose output
# $verbose = true

class Chitter < Sinatra::Base
  enable :sessions
  set :session_secret, ENV.fetch('SESSION_SECRET') { SecureRandom.hex(64) }

  # :nocov:
  before '/' do
    verbose_output(request) if $verbose
  end
  # :nocov:

  get '/' do
    File.read('public/index.html')
  end

  # start the server if ruby file executed directly
  run! if app_file == $0

  private

  # :nocov:
  def verbose_output(request)
    puts "\n#{request.request_method}: #{request.path}"
    puts "session: "; p session
    puts "params: "; p params
  end
  # :nocov:

end
