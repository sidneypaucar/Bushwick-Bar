class AuthenticationsController < ApplicationController
  before_action :authorize_request, except: :signin

  # POST /auth/signin
  def signin
    @user = User.find_by(username: signin_params[:username])
    if @user.authenticate(signin_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end


  private

  def signin_params
    params.require(:authentication).permit(:username, :password)
  end
end
