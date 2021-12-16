import { useState } from 'react'
import './CocktailCreate.css'

export default function CocktailCreate({handleCocktailCreate}) {
  const [formData, setFormData] = useState({
  name:''
})
  const { name } = formData;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className= "cocktail_create_background">
    <form className='cocktail_create_form' onSubmit={(e) => {
      e.preventDefault();
      handleCocktailCreate(formData);
    }}>
      <h3 className='cocktail_create_title'>Create Cocktail</h3>
      <label>
          <input className='cocktail_create_text'
            type='text'
            name='name' 
            placeholder="Cocktail Name"
            value={name}
            onChange={handleChange} />
        </label>
        <br />
        <br />
      <button className='create_submit_button'>Submit</button>
    </form>
    </div>
  )
}
