import React from 'react'
import { Link } from 'react-router-dom'
  
export default function Cocktails({ cocktails }) {
  return (
    <div>
      <h3>Cocktails</h3>
      {cocktails.map((cocktail) => (
        <p>{cocktail.name}</p>
      ))}
      <Link to='/cocktails/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
