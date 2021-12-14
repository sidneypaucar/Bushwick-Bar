import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import CocktailCreate from '../screens/CocktailCreate'
import CocktailEdit from '../screens/CocktailEdit'
import Cocktails from '../screens/Cocktails'
import { getAllCocktails, postCocktail, deleteCocktail, putCocktail } from '../services/cocktail'

export default function MainContainer() {
  const [cocktails, setCocktails] = useState([])
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
    setCocktails((prevState) => [...prevState, newCocktail]);
    history.push('/cocktails');
  };

  const handleCocktailDelete = async (id) =>{
    await deleteCocktail(id);
    setCocktails(prevState => prevState.filter(cocktail => cocktail.id !== id));
  }

  const handleCocktailUpdate = async (id, formData) => {
    const newCocktail = await putCocktail(id, formData)
    setCocktails(prevState => prevState.map(cocktail => {
      return cocktail.id === Number(id) ? newCocktail :cocktail
    }));
    history.push('/cocktails')
  }

  return (
    <div>
      <Switch>
        <Route path= '/cocktails/:id/edit'>
          <CocktailEdit cocktails={cocktails} handleCocktailUpdate={handleCocktailUpdate}/>
        </Route>
        <Route path='/cocktails/new'>
          <CocktailCreate handleCocktailCreate={handleCocktailCreate}/>
        </Route>
        <Route path='/cocktails'>
          <Cocktails cocktails={cocktails} handleCocktailDelete={handleCocktailDelete}/>
        </Route>
        <Route path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  )
}
