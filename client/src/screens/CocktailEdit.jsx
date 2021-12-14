import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCocktailUpdate(id, formData);
    }}>
      <h3>Edit Cocktail</h3>
      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  )
}