import './App.css';

import Navigation from './components/Header/Navigation/Navigation';
import SearchBar from './components/Header/SearchBar/SeacrhBar';
import Movies from './components/Main/Movies'

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchBar />
      <Movies />
    </div>
  );
}

export default App;
