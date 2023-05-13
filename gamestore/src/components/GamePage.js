import { useParams } from "react-router-dom"
import { mygames, store } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const allgames = store.concat(mygames) //concatinerer begge arrayene sammen for å kunne søke i begge
  const game = allgames.find((game) => game.id === parseInt(id)) //søker i begge arrayene etter spillet


    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
        <p>Genre: {game.genres.join(', ')}</p> {/* lister ut alle sjangre*/}
        <p>Released: {game.released}</p>
        </article>
          )
}
