import React from 'react'

export default function Ingredients({ ingredients }) {
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => (
        <p key={ingredient.id}>
          {ingredient.name}
        </p>
      ))}
    </div>
  )
}
