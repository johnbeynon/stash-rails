class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_api_client

  def set_api_client
    @api = StashAPI.connect_token(ENV["STASH_AUTH_TOKEN"], {url: ENV["STASH_API_URL"]})
  end
end
