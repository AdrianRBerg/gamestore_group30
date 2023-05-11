import logo from './logo.svg';
import './App.css';
import Gameshop from './components/gameshop'
import { Route, Routes } from "react-router-dom"
import GamePage from './components/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gameshop/>}/>
      <Route path="/game/:id" element={<GamePage/>}/>
    </Routes>
  )
}

export default App;
