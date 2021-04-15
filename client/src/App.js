import './App.css';
import {Route} from 'react-router-dom'

import Navigation from './components/Header/Navigation';
import HomePage from './components/Home/Movies';
import DetailsPage from './components/Details/Details';
import CreatePage from './components/Create/Create';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route path="/" exact component={HomePage} />
      <Route path="/category/:category" exact component={HomePage} />
      <Route path="/movie/details/:id" exact component={DetailsPage} />
      <Route path="/movie/create" exact component={CreatePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />

    </div>
  );
}

export default App;
