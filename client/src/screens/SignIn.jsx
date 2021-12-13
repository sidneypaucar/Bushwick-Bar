import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form>
      <h3>Sign In</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/signup'>SignUp</Link>
      <button>Submit</button>
    </form>
  )
}
