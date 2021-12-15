import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktails.css'
  
export default function Cocktails({ cocktails, handleCocktailDelete, currentUser }) {
  return (
    <div className= "cocktails_background">
      <h3 className='cocktails_title'>Cocktails</h3>
      {cocktails.map((cocktail) => (
        <div key={cocktail.id}>
          <Link className='cocktail_link' to={`/cocktails/${cocktail.id}`}>
            <p className='cocktail_name'>{cocktail.name}</p>
          </Link>
          {currentUser && currentUser.id === cocktail.user_id && (
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
        <br />
        <br />
        <button>Create</button>
      </Link>
    </div>
  )
}
