import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Footer from '../components/footer/Footer'
import './Layout.css'


export default function Layout({ currentUser, handleSignOut, children }) {

  return (
    <div className = "layout">
      <div className="header">
    <Link className='title_route' to='/'>
      <h1 className="title">BUSHWICK BAR</h1>
    </Link>
        {currentUser ? (
          <div className="username_signout">
            <p className= 'username'>{currentUser.username}</p>
            <Button variant="outlined"  color="warning" className= 'sign_out_button' onClick={handleSignOut}>
              Sign Out
            </Button>
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
      </div>
      {children}
      <Footer/>
    </div>
  )
}
