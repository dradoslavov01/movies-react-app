import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Navigation from './components/Header/Navigation';
import HomePage from './components/Home/Movies';
import DetailsPage from './components/Details/Details';
import EditPage from './components/Edit/Edit';
import CreatePage from './components/Create/Create';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';

import { auth } from './utils/firebase';

export const AuthContext = React.createContext();

function App() {

  const [loggedInUser, setloggedInUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setloggedInUser);
  }, [loggedInUser]);


  return (
    <div className="App">
      <AuthContext.Provider value={loggedInUser}>
        <Navigation />

        <Route path="/" exact component={HomePage} />
        <Route path="/category/:category" component={HomePage} />
        <Route path="/movie/details/:id" exact component={DetailsPage} />
        <Route path="/movie/details/edit/:id" exact component={EditPage} />
        <Route path="/movie/create" component={CreatePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" render={() => {
          auth.signOut()
          return <Redirect to='/' />
        }} />
      </AuthContext.Provider>
    </div>
  );

}

export default App;
