import logo from './logo.svg';
import './App.css';

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
}

export default App;