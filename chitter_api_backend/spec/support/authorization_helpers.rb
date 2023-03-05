module AuthorizationHelpers
  def authorize!
    request.headers["Authorization"] =  "Token token=#{user.generate_session_key!}"
  end

  def authorize_badly!
    request.headers["Authorization"] =  "Token token=horse"
  end
end
