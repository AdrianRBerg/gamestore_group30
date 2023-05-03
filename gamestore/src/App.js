import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import Gameshop from './components/gameshop'
import favourites from './components/MyFavourites';
import { Route, Routes } from "react-router-dom"
import MyFavourites from './components/MyFavourites';


function App() {
  return (
    <MyFavourites/>
 )
>>>>>>> Stashed changes
}
}
export default App;
