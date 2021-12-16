import { useState } from 'react'
import './SignUp.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className= "sign_up_background">
    <form className= "sign_up_form"
      onSubmit={(e) => {
      e.preventDefault();
      handleSignUp(formData);
    }}>
      <h3 className= 'sign_up_title'>Sign Up</h3>
      <label className = 'username_text_box'>
        <input
          type='text'
          name='username'
          value={username}
          placeholder="Username"
          onChange={handleChange}
          
        />
      </label>
      <br />
      <label className = 'email_text_box'>
        <input
          type='text'
          name='email'
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <br />
      <label className = 'password_text_box'>
        <input
          type='password'
          name='password'
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
        <br />
        <br />
      <button>Submit</button>
      </form>
    </div>
  )
}
