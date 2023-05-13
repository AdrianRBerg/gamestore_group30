import logo from './logo.svg';
import './App.css';
import Gameshop from './components/gameshop'
import { Route, Routes } from "react-router-dom"
import GamePage from './components/GamePage';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gameshop/>}/>
      <Route path="/game/:id" element={<GamePage/>}/>
      <Route path="/favourites" element={<MyFavourites/>}/>
      <Route path="/mygames" element={<MyGames/>}/>
    </Routes>
  )
}

export default App;