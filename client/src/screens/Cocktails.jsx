import React from 'react'
import { Link } from 'react-router-dom'
  
export default function Cocktails({ cocktails, handleCocktailDelete }) {
  return (
    <div>
      <h3>Cocktails</h3>
      {cocktails.map((cocktail) => (

        <div>
          <p>{cocktail.name}</p>
          <button>Edit</button>
          <button onClick={()=>handleCocktailDelete(cocktail.id)}>Delete</button>
        </div>
      ))}
      <Link to='/cocktails/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
