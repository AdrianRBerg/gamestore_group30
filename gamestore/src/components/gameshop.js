import { useEffect, useState } from "react"
import Buy from "./buy"
import GameCard from "./GameCard"
export default function Gameshop() {
   /* fetch('https://api.rawg.io/api/platforms?key=be9e1b206b684a099d8c1813a128a044')
  .then(res => res.json())
  .then(data => console.log(data)) */

  const [games, setGames] = useState([])

  useEffect(() =>{
    const apiKey = 'be9e1b206b684a099d8c1813a128a044'
    const url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        setGames(data.results)
    })
  })

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