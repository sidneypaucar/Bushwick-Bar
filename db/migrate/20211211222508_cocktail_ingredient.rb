class CocktailIngredient < ActiveRecord::Migration[6.1]
  def change
    create_join_table :cocktails, :ingredients 
  end
end
