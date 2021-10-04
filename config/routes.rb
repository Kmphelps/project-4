Rails.application.routes.draw do
  resources :people, only: [:index]
  resources :chores, only: [:index, :show, :destroy]
  resources :signups, only: [:create, :destroy]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
