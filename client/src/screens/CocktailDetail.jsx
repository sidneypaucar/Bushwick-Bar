import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './CocktailDetail.css'
import { getOneCocktail, addIngredient } from '../services/cocktail';
  
export default function CocktailDetail( {ingredients} ) {
  const [cocktail, setCocktail] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchCocktailItem = async () => {
      const cocktailItem = await getOneCocktail(id)
      setCocktail(cocktailItem)
    }
    fetchCocktailItem()
  }, [id])

  const handleChange = (e) => {
    const {value} = e.target;
    setSelectedIngredient(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIngredients = await addIngredient({
      cocktail_id: id, 
      ingredient_id: selectedIngredient,
    })
    setCocktail((prevState) => ({
      ...prevState,
      ingredients: newIngredients,
    }))
  }

  return (
    <div className= "cocktail_detail_background">
      {cocktail && (
        <div className='cocktail_details'>
          <h2 className='cocktail_name'>{cocktail.name}</h2>
          {cocktail.ingredients.map((ingredient) => (
            <p className='ingredient_id' key= {`details${ingredient.id}`}> {ingredient.name}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <select 
        className='drop_down' 
        onChange={handleChange} 
        defaultValue='default'>
        <option disabled value='default'> Select an Ingredient </option>
          {ingredients.map(ingredient => (
            <option key= {`options${ingredient.id}`} value= {ingredient.id}>{ingredient.name}</option>
          ))}
        </select>
        <button className="add_button">Add</button>
      </form>
    </div>
  )
}
