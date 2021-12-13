import './App.css';
import Layout from './layouts/Layout';
import {Switch, Route} from 'react-router-dom'
import SignIn from './screens/SignIn';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App;
