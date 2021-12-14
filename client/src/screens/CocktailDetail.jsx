import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getOneCocktail } from '../services/cocktail';
  
export default function CocktailDetail() {
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
      <h3>{cocktail?.name}</h3>
    </div>
  )
}
