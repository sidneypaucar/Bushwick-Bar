import { Link } from 'react-router-dom'
import './Layout.css'

export default function Layout({ currentUser, handleSignOut, children }) {

  return (
    <div className = "layout">
      <header className="header">
        <h1 className="title">Bushwick Bar</h1>
        {currentUser ? (
          <div>
            <p className= 'username'>{currentUser.username}</p>
            <button className= 'sign_out_button' onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link className = 'sign_in_button' to='/signin'>Sign In</Link>
        )}
        {currentUser && (
          <nav className= 'nav'>
          <Link className= 'cocktails_button' to='/cocktails'>Cocktails</Link>
          <Link className= 'ingredients_button' to='/ingredients'>Ingredients</Link>
          </nav>
        )}
      </header>
      {children}
    </div>
  )
}
