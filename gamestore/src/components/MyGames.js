import GameCard from "./GameCard"
import { mygames  } from "./games"
import Nav from './Nav'


export default function MyGames({}) {
    return (
    <>
    <h1>My Games</h1>
    <Nav/>
    <h2>Owned Games</h2>
        {mygames.map(game =>(
            <>
            <section className="card" key={game.id}>
            <GameCard
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`}
            />
            </section>
            </> 
        ))} 
    </>
    )
}   