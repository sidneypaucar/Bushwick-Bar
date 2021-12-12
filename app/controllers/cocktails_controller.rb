class CocktailsController < ApplicationController
  before_action :set_cocktail, only: :show
  before_action :authorize_request, only: :create
  before_action :set_user_cocktail, only: [:update, :destroy]

  # GET /cocktails
  def index
    @cocktails = Cocktail.all

    render json: @cocktails
  end

  # GET /cocktails/1
  def show
    render json: @cocktail, include: :ingredients
  end

  # POST /cocktails
  def create
    @cocktail = Cocktail.new(cocktail_params)
    @cocktail.user = @current_user
    if @cocktail.save
      render json: @cocktail, status: :created
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cocktails/1
  def update
    if @cocktail.update(cocktail_params)
      render json: @cocktail
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cocktails/1
  def destroy
    @cocktail.destroy
  end

  def add_ingredient
    @cocktail = Cocktail.find(cocktail_params[:cocktail_id])
    @ingredient = Ingredient.find (cocktail_params[:ingredient_id])

    @cocktail.ingredients << @ingredient

    render json: @cocktail.ingredients
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cocktail
      @cocktail = Cocktail.find(params[:id])
    end

    def set_user_cocktail
      @cocktail = @current_user.cocktails.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cocktail_params
      params.require(:cocktail).permit(:name, :cocktail_id, :ingredient_id)
    end
end
