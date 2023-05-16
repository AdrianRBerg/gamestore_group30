import {Outlet} from "react-router-dom"
import "./stylesheet.css"
import MyGames from './MyGames';
import MyFavourites from './MyFavourites';
import GameShop from './gameshop'
import Nav from "./Nav";
import {store, mygames} from './games'
import GameCard from "./GameCard";
import Buy from './buy'

export default function Dashboard() {
     //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
     return (
        <>
        <h1>Mac's Gamehub</h1>
        <Nav/>
          <section>
          <h2>Gameshop</h2>
          <div className="game-card-container">
            {store.slice(0,3).map((game) => (
              <>
              <div className="game-card">
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`}/>
                <Buy Link={game.link}/>
                </div>
              </>
            ))}
            </div>
          </section>
          <section>
          <h2>My Games</h2>
          <div className="game-card-container">
            {mygames.slice(0, 4).map((game) => (
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} />
            ))}
            </div>
          </section>
          <section>
          <h2>My Favourites</h2>
          <div className="game-card-container">
            {mygames.filter((game) => game.fav).slice(0, 2).map((game) => (
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} />
            ))}
            </div>
          </section>
        </>
      )
}


