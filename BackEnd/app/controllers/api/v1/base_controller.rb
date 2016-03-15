class Api::V1::BaseController < ActionController::Base

  clear_helpers

  protect_from_forgery with: :null_session

  skip_before_filter :verify_authenticity_token
  before_filter :log_access_token

  private

  def log_access_token
    Rails.logger.info "  Access Token: #{request.headers['X-Access-Token']}"
  end

  def current_user
    @current_user ||= User.find_by_access_token(request.headers['X-Access-Token'])
  end

end
