Rails.application.routes.draw do
  post '/auth/signin', to: 'authentications#signin'
  get '/auth/verify', to: 'authentications#verify'
  resources :ingredients
  resources :cocktails
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
