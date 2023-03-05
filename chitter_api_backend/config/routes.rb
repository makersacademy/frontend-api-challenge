Rails.application.routes.draw do
  resources :peeps do
    resources :likes, only: [:update, :destroy], param: :user_id
  end
  resources :users, only: [:index, :show, :create]
  resources :sessions, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
