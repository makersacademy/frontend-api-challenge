class PeepsController < ApplicationController
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :set_peep, only: [:show, :update, :destroy]
  before_action :authorize_create, only: [:create]
  before_action :authorize_modify, only: [:update, :destroy]

  # GET /peeps
  def index
    @peeps = Peep.all.order(created_at: :desc).limit(50)

    render json: @peeps
  end

  # GET /peeps/1
  def show
    render json: @peep
  end

  # POST /peeps
  def create
    @peep = Peep.new(create_peep_params)

    if @peep.save
      render json: @peep, status: :created, location: @peep
    else
      render json: @peep.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /peeps/1
  def update
    if @peep.update(update_peep_params)
      render json: @peep
    else
      render json: @peep.errors, status: :unprocessable_entity
    end
  end

  # DELETE /peeps/1
  def destroy
    @peep.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_peep
      @peep = Peep.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def create_peep_params
      params.require(:peep).permit(:user_id, :body)
    end

    def update_peep_params
      params.require(:peep).permit(:body)
    end

    def authorize_create
      authenticate_or_request_with_http_token do |token, options|
        next false if create_peep_params[:user_id].blank?
        user = User.find(create_peep_params[:user_id])
        next false if user.session_key.blank?
        ActiveSupport::SecurityUtils.secure_compare(token, user.session_key)
      end
    end

    def authorize_modify
      authenticate_or_request_with_http_token do |token, options|
        set_peep
        next false if @peep.user.session_key.blank?
        ActiveSupport::SecurityUtils.secure_compare(token, @peep.user.session_key)
      end
    end
end
