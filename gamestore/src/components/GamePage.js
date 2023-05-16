import { useParams } from "react-router-dom"
<<<<<<< HEAD
import { store } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const game = store.find((game) => game.id === parseInt(id))
=======
import { mygames, store } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const allgames = store.concat(mygames) //concatinerer begge arrayene sammen for å kunne søke i begge.
  const game = allgames.find((game) => game.slug === id) //dette er for de spillene vi eier, ikke de i store.

>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e

    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
<<<<<<< HEAD
        <p>Genre: {game.genre}</p>
        <p>Released: {game.released}</p>
        </article>
          )
}
=======
        <p>Genre: {game.genres.join(', ')}</p> {/* lister ut alle sjangre*/}
        <p>Released: {game.released}</p>
        </article>
          )
}
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
