import './App.css';
import {Route} from 'react-router-dom'
import Navigation from './components/Header/Navigation';
import MoviesPage from './components/Main/Movies'
import LoginPage from './components/Login/Login'
import RegisterPage from './components/Register/Register'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route path="/" exact component={MoviesPage} />
      <Route path="/category/:category" exact component={MoviesPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />


    </div>
  );
}

export default App;
