import './App.css';
import {Route, Redirect} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Navigation from './components/Header/Navigation';
import HomePage from './components/Home/Movies';
import DetailsPage from './components/Details/Details';
import CreatePage from './components/Create/Create';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';

import {auth} from './utils/firebase';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [user])

  return (
    <div className="App">
      <Navigation isLoggedIn={user} />

      <Route path="/" exact component={HomePage} />
      <Route path="/category/:category" component={HomePage} />
      <Route path="/movie/details/:id" component={DetailsPage} />
      <Route path="/movie/create" component={CreatePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/logout" render={() =>{
        auth.signOut()
        return <Redirect to='/' />
      }} />


    </div>
  );
}

export default App;
