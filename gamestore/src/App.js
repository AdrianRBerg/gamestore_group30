import logo from './logo.svg';
import './App.css';
import Gameshop from './components/gameshop'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gameshop/>}/>
    </Routes>
  )
}

export default App;
