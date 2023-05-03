import { useEffect, useState } from "react"
import Buy from "./buy"
import GameCard from "./GameCard"
export default function Gameshop() {

  const [games, setGames] = useState([])

  useEffect(() =>{
    const apiKey = 'be9e1b206b684a099d8c1813a128a044'
    const url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added`

    const savedData = localStorage.getItem(url)
    if(savedData) {
        setGames(JSON.parse(savedData))
        return
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(url, JSON.stringify(data.results))
        setGames(data.results)
    })
  }, [])

    return (
    <>
    <h1>Gameshop</h1>
        {games.slice(0, 10).map(game =>(
            <>
            <article>
            <GameCard gameId={game.id} game={game} />
            <Buy />
            </article>
            </> 
        ))} 
    </>
    )
}