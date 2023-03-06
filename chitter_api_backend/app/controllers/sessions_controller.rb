class SessionsController < ApplicationController
  INVALID_AUTH_ERRORS = { password: "Invalid username or password" }

  # POST /sessions
  def create
    user = User.find_by(handle: params[:session][:handle])
    if user.authenticate(params[:session][:password])
      render json: {
        user_id: user.id,
        session_key: user.generate_session_key!
      }, status: :created
    else
      render json: { errors: INVALID_AUTH_ERRORS }, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def session_params
      params.require(:session).permit(:handle, :password)
    end
end
