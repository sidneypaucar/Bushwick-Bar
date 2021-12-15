import React from 'react'
import './Ingredients.css'

export default function Ingredients({ ingredients }) {
  return (
    <div className= "ingredients_background">
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => (
        <p key={ingredient.id}>
          {ingredient.name}
        </p>
      ))}
    </div>
  )
}
