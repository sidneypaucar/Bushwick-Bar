# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.destroy_all
Cocktail.destroy_all
User.destroy_all

@admin = User.create!(username: 'Sid', email: 'sid@gmail.com', password: '123456' )

puts "#{User.count} users created"

Ingredient.create!(name: 'Vodka')
Ingredient.create!(name: 'Gin')
Ingredient.create!(name: 'Bourbon')
Ingredient.create!(name: 'Rye')
Ingredient.create!(name: 'Scotch')
Ingredient.create!(name: 'Rum')
Ingredient.create!(name: 'Tequila')
Ingredient.create!(name: 'Mescal')
Ingredient.create!(name: 'Brandy')
Ingredient.create!(name: 'Dark Rum')
Ingredient.create!(name: 'White Rum')
Ingredient.create!(name: 'Red Wine')
Ingredient.create!(name: 'Rose Wine')
Ingredient.create!(name: 'Liqueur')
Ingredient.create!(name: 'Absinthe')
Ingredient.create!(name: 'Cola')
Ingredient.create!(name: 'Syrup')
Ingredient.create!(name: 'Ice')
Ingredient.create!(name: 'Mint')
Ingredient.create!(name: 'Bitters')
Ingredient.create!(name: 'Cream')
Ingredient.create!(name: 'Salt')
Ingredient.create!(name: 'Sugar')
Ingredient.create!(name: 'Passionfruit')
Ingredient.create!(name: 'Grapefuit')
Ingredient.create!(name: 'Watermelon')
Ingredient.create!(name: 'Strawberry')
Ingredient.create!(name: 'Blackberry')
Ingredient.create!(name: 'Cherry')
Ingredient.create!(name: 'Mango')
Ingredient.create!(name: 'Peach')
Ingredient.create!(name: 'Lemon')
Ingredient.create!(name: 'Lime')
Ingredient.create!(name: 'Orange')
Ingredient.create!(name: 'Tomato Juice')
Ingredient.create!(name: 'Pineapple Juice')
Ingredient.create!(name: 'Cranberry Juice')
Ingredient.create!(name: 'Club Soda')
Ingredient.create!(name: 'Tonic Water')
Ingredient.create!(name: 'Raspberry')

puts "#{Ingredient.count} ingredients created"

10.times do
  Cocktail.create!(name: Faker::FunnyName.name, user: @admin) 
end

puts "#{Cocktail.count} cocktails created"


@first_cocktail = Cocktail.first

Cocktail.all.each do |cocktail|
  @ingredients = Ingredient.all.shuffle
  rand(5..8).times do |i|
    cocktail.ingredients << @ingredients[i]
  end
  puts "#{cocktail.ingredients.length} ingredients added"
end