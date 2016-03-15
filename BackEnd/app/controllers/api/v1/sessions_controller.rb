class Api::V1::SessionsController < Api::V1::BaseController

  def create
    @user = User.find_by_username(params[:username])

    if @user && @user.authenticate(params[:password])
      render status: 200
    else
      render status: 401, text: ''
    end
  end

end
