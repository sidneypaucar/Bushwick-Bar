import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Bushwick Bar</h1>
        <Link to='/signin'>SignIn/SignUp</Link>
      </header>
      {props.children}
    </div>
  )
}
