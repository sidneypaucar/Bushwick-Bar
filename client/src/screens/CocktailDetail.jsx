import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

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
    <div>
      {cocktail && (
        <div>
          <h3>{cocktail.name}</h3>
          {cocktail.ingredients.map((ingredient) => (
            <p key= {ingredient.id}> {ingredient.name}</p>
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
