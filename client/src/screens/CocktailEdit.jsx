import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './CocktailEdit.css'

export default function CocktailEdit({ cocktails, handleCocktailUpdate }) {
  const [formData, setFormData] = useState({
  name:'',
  })
  const { name } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const cocktailItem = cocktails.find((cocktail) => cocktail.id === Number(id))
      setFormData({ name: cocktailItem.name });
    };
    if (cocktails.length) prefillFormData();
  }, [cocktails, id])
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className= "cocktail_edit_background">
    <form className= 'cocktail_edit_form' onSubmit={(e) => {
      e.preventDefault();
      handleCocktailUpdate(id, formData);
    }}>
      <h3 className='cocktail_edit_title'>Edit Cocktail</h3>
      <label>
          <input className='cocktail_edit_name'
            type='text'
            name='name'
            placeholder="Pick Your Poison"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
      <button className='cocktail_create_button'>Submit</button>
    </form>
    </div>
  )
}
