class IngredientsController < ApplicationController
  # GET /ingredients
  def index
    @ingredients = Ingredient.all

    render json: @ingredients
  end
end
