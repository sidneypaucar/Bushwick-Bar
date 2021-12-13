import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './layouts/Layout';
import SignIn from './screens/SignIn';
import { signinUser, signupUser } from './services/auth';
import SignUp from './screens/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = async (formData) => {
    const userData = await signinUser(formData);
    setCurrentUser(userData);
  }

  const handleSignUp = async (formData) => {
    const userData = await signupUser(formData);
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/signin'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/signup'>
            <SignUp handleSignUp={handleSignUp}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App;
