
export default function GamePage({ game }) {
    return (
        <article className="game-page">
        <img src={game.image}/>
        <h2>{game.title}</h2>
        <p>Genre: {game.genre}</p>
        </article>
          )
}