class LikesController < ApplicationController
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authorize

  # POST /likes
  def update
    @like = Like.new(like_params)

    if @like.save
      render json: @like, status: :created, location: [@like.peep, @like]
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like = Like.find_by(like_params)
    @like.destroy
  end

  private
    # Only allow a trusted parameter "white list" through.
    def like_params
      {
        user_id: params[:user_id],
        peep_id: params[:peep_id]
      }
    end

    def authorize
      authenticate_or_request_with_http_token do |token, options|
        next false if like_params[:user_id].blank?
        user = User.find(like_params[:user_id])
        next false if user.session_key.blank?
        ActiveSupport::SecurityUtils.secure_compare(token, user.session_key)
      end
    end
end
