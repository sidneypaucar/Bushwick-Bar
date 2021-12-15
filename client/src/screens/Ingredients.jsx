import React from 'react'
import './Ingredients.css'

export default function Ingredients({ ingredients }) {
  return (
    <div className= "ingredient_background">
      <h3 className='ingredient_title'>Ingredients</h3>
      {ingredients.map((ingredient) => (
        <p className='ingredient_id' key={ingredient.id}>
          {ingredient.name}
        </p>
      ))}
    </div>
  )
}
