import React, { useEffect } from 'react';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import ProfileScreen from './pages/ProfileScreen'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" 
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from "./features/userSlice"

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // listens to any auth state change
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
          //logged in
          // console.log(userAuth)
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        } else {
          //logged out
          dispatch(logout());
        }
      })

      return unsubscribe;
  }, [dispatch]);
  
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
            <Route>
              <ProfileScreen path = "/profile"/>
            </Route>
            
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
