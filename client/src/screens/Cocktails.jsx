import React from 'react'
import { Link } from 'react-router-dom'
  
export default function Cocktails({ cocktails, handleCocktailDelete, currentUser }) {
  return (
    <div>
      <h3>Cocktails</h3>
      {cocktails.map((cocktail) => (
        <div>
          <p>{cocktail.name}</p>
          {currentUser.id === cocktail.user_id && (
            <>
            <Link to={`/cocktails/${cocktail.id}/edit`}>
            <button>Edit</button>
            </Link>
            <button onClick={()=>handleCocktailDelete(cocktail.id)}>Delete</button>
            </>
            )}
        </div>
      ))}
      <Link to='/cocktails/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
