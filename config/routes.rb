				Rails.application.routes.draw do
				  resources :projects
				  resources :todos 

				  root 'projects#index'
				end
