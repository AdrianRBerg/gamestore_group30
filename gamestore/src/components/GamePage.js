import { useParams } from "react-router-dom"
import { store } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const game = store.find((game) => game.id === parseInt(id))

    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
        <p>Genre: {game.genre}</p>
        <p>Released: {game.released}</p>
        </article>
          )
}