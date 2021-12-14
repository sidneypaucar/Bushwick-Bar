import React from 'react'

export default function Ingredients({ ingredients }) {
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => (
        <p>{ingredient.name}</p>
      ))}
    </div>
  )
}
