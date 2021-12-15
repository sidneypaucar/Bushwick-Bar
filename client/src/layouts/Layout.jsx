import { Link } from 'react-router-dom'

export default function Layout({ currentUser, handleSignOut, children }) {

  return (
    <div className = "header">
      <header>
        <h1>Bushwick Bar</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link to='/signin'>SignIn/SignUp</Link>
        )}
        {currentUser && (
          <nav>
          <Link to='/cocktails'>Cocktails</Link>
          <Link to='/ingredients'>Ingredients</Link>
        </nav>
        )}
      </header>
      {children}
    </div>
  )
}
