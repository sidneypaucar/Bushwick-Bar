import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { currentUser } = props;

  return (
    <div>
      <header>
        <h1>Bushwick Bar</h1>
        {currentUser ? (
          <div>something</div>
        ) : (
          <Link to='/signin'>SignIn/SignUp</Link>
        )}
      </header>
      {props.children}
    </div>
  )
}
