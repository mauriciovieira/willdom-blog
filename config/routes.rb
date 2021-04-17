Rails.application.routes.draw do
  devise_for :users
	root 'articles#index'
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  match "*path" => "articles#index", via: [:get, :post],
  constraints: lambda { |req| req.path.exclude? 'rails/active_storage' }

end
