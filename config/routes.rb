Rails.application.routes.draw do
  post '/auth/signin', to: 'authentications#signin'
  get '/auth/verify', to: 'authentications#verify'
  resources :ingredients, only: :index
  post '/cocktails/ingredients', to: 'cocktails#add_ingredient'
  resources :cocktails
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
