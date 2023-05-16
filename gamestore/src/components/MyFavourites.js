import GameCard from "./GameCard"
import { mygames  } from "./games"
import Nav from './Nav'


export default function MyFavourites({}) {
    const favourites = mygames.filter(game => game.fav === true) //lager en ny array med de spillene som har fav: true, bruker filter for å sortere ut disse 
                                                                // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    return (
    <>
    <h1>Favourites</h1>
    <Nav/>
    <h2>Favourited</h2>
        {favourites.map(game =>( //itererer gjennom favoritter
            <>
            <section className="card" key={game.id}>
            <GameCard
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} //erstatter id med slug for penere url
            />
            </section>
            </> 
        ))}
     </>
     )
 }