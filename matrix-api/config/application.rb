require_relative "boot"
require "rails/all"
require 'rack/cors'    # <-- Add this line

Bundler.require(*Rails.groups)

module MatrixApi
  class Application < Rails::Application
    config.load_defaults 8.0

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
      end
    end
    config.api_only = true
  end
end
