import { useState } from 'react'

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
    <div className= "cocktail_creat_background">
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCocktailCreate(formData);
    }}>
      <h3>Create Cocktail</h3>
      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
    </div>
  )
}
