Rails.application.routes.draw do
  namespace 'api', :format => 'json' do
    namespace 'v1' do
      resources :boards, only: %w( index show )
      resources :topics, only: %w( show )
      resources :posts, only: %w( create destroy )
      resources :sessions, only: %w( create )
    end
  end
end
