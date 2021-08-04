import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <h1>Hello you are in the main page</h1>
          </Route>
          <Route exact path='/about'>
            <div>You are in the About</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
