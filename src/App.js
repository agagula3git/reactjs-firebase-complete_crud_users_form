import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ListOfContacts from './components/ListOfContacts';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/contacts"><ListOfContacts/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
