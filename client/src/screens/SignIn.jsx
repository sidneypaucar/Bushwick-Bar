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
      <h3 className= 'sign_in_title'>Sign In</h3>
      <label >
        <input className = 'username_text_box'
          type='text'
          name='username'
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
      </label >
        <br />
      <label >
        <input className = 'password_text_box'
          type='password'
          name='password'
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
        <br />
        <br />
        <button className='signin_button'>Submit</button>
        <br />
        <br />
      <Link className= 'sign_up_link' to='/signup'>Don't have an account? Sign Up.</Link>
      </form>
    </div>
  )
}
