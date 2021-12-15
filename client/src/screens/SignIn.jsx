import { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;
  const { handleSignIn } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className= "sign_in_background">
    <form className="sign_in_form" onSubmit={(e)=> {
      e.preventDefault();
      handleSignIn(formData);
    }}>
      <h3>SignIn</h3>
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
      <Link to='/signup'>Sign Up</Link>
      <button>Submit</button>
      </form>
    </div>
  )
}
