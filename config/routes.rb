Rails.application.routes.draw do
  # root to: "pages#home"
  root 'home#index'
  resources :home, only: [:index, :new, :create]

  # get 'home/index'
  get "/bio", to: "home#bio"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
