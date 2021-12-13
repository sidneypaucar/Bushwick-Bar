import { useState,useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import CocktailCreate from '../screens/CocktailCreate'
import Cocktails from '../screens/Cocktails'
import { getAllCocktails, postCocktail } from '../services/cocktail'

export default function MainContainer() {
  const [cocktails, setCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])
  const history = useHistory(); 

  useEffect(() => {
    const fetchCocktails = async () => {
      const cocktailList = await getAllCocktails();
      setCocktails(cocktailList);
    }
    fetchCocktails();
  }, [])

  const handleCocktailCreate = async (formData) => {
    const newCocktail = await postCocktail(formData);
    setCocktails(prevState => [...prevState, newCocktail]);
    history.push('/cocktails');
  };

  return (
    <div>
      <Switch>
        <Route path='/cocktails/new'>
          <CocktailCreate handleCocktailCreate={handleCocktailCreate}/>
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
