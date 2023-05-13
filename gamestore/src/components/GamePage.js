import { useParams } from "react-router-dom"
import { mygames } from "./games.js"

export default function GamePage() {
  const { id } = useParams()
  const game = mygames.find((game) => game.id === parseInt(id)) //dette er for de spillene vi eier, ikke de i store.

    return (
        <article className="game-page">
        <h2>{game.title}</h2>
        <img src={game.img}/>
        <p>Genre: {game.genres.join(', ')}</p> {/* lister ut alle sjangre*/}
        <p>Released: {game.released}</p>
        </article>
          )
}
