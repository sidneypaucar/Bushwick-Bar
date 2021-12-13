import { useState,useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CocktailCreate from '../screens/CocktailCreate'
import Cocktails from '../screens/Cocktails'
import { getAllCocktails } from '../services/cocktail'

export default function MainContainer() {
  const [cocktails, setCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const fetchCocktails = async () => {
      const cocktailList = await getAllCocktails();
      setCocktails(cocktailList);
    }
    fetchCocktails();
  }, [])

  return (
    <div>
      <Switch>
        <Route path='/cocktails/new'>
          <CocktailCreate />
        </Route>
        <Route path='/cocktails'>
          <Cocktails cocktails={cocktails}/>
        </Route>
        <Route path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
