import React from 'react';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" 

function App() {

  const user = null;
  return (
    <div className="App">
     
      <Router>
        {
          !user ? (
            <Login />
          ) : (
          <Switch>
            <Route exact path = "/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
