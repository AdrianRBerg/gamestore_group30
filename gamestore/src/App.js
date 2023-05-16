import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import MyGames from './components/MyGames';

function App() {
  return (
    <div id="body">
    <MyGames></MyGames>
    </div>
  );
=======
import Gameshop from './components/gameshop'
import { Route, Routes } from "react-router-dom"
import GamePage from './components/GamePage';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Gameshop" element={<Gameshop/>}/>
      <Route path="/game/:id" element={<GamePage/>}/>
      <Route path="/favourites" element={<MyFavourites/>}/>
      <Route path="/mygames" element={<MyGames/>}/>
    </Routes>
  )
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
}

export default App;