import './App.css';
import {Route} from 'react-router-dom'
import Navigation from './components/Header/Navigation/Navigation';
import SearchBar from './components/Header/SearchBar/SeacrhBar';
import Movies from './components/Main/Movies'

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchBar />
      <Route path="/" exact component={Movies} />
      <Route path="/category/:category" exact component={Movies} />

    </div>
  );
}

export default App;
