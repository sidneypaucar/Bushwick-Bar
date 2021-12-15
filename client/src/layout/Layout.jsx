import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import './Layout.css'


export default function Layout({ currentUser, handleSignOut, children }) {

  return (
    <div className = "layout">
      <header className="header">


    <Link className='title_route' to='/'>
      <h1 className="title">BUSHWICK BAR</h1>
    </Link>

        {currentUser ? (
          <div className="username_signout">
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
      <Footer/>
    </div>
  )
}
