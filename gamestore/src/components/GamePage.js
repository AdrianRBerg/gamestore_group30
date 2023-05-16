import { useParams } from "react-router-dom"
import { mygames, store } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const allgames = store.concat(mygames) //concatinerer begge arrayene sammen for å kunne søke i begge.
  const game = allgames.find((game) => game.slug === id) //dette er for de spillene vi eier, ikke de i store.


    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
        <p>Genre: {game.genres.join(', ')}</p> {/* lister ut alle sjangre*/}
        <p>Released: {game.released}</p>
        </article>
          )
}

    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
        <p>Genre: {game.genre}</p>
        <p>Released: {game.released}</p>
        </article>
          )
}