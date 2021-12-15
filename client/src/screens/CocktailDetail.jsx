import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './CocktailDetail.css'

import { getOneCocktail } from '../services/cocktail';
  
export default function CocktailDetail( {ingredients} ) {
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    const fetchCocktailItem = async () => {
      const cocktailItem = await getOneCocktail(id)
      setCocktail(cocktailItem)
    }
    fetchCocktailItem()
  }, [id])

  return (
    <div className= "cocktail_detail_background">
      {cocktail && (
        <div className='cocktail_details'>
          <h2 className='cocktail_name'>{cocktail.name}</h2>
          {cocktail.ingredients.map((ingredient) => (
            <p className='ingredient_id' key= {ingredient.id}> {ingredient.name}</p>
          ))}
        </div>
      )}
      <form>
        <select>
          {ingredients.map(ingredient => (
            <option key= {ingredient.id}>{ingredient.name}</option>
          ))}
        </select>
      </form>
    </div>
  )
}
