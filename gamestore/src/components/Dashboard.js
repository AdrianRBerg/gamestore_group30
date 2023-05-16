import {Outlet} from "react-router-dom"
import "./Dashboard.css"
import MyGames from './MyGames';
import MyFavourites from './MyFavourites';
import GameShop from './gameshop'
import Nav from "./Nav";
import {store, mygames} from './games'
import GameCard from "./GameCard";

export default function Dashboard() {
     //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
     return (
        <>
        <Nav/>
          <section>
          <h2>Gameshop</h2>
            {store.slice(0,4).map((game) => (
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} />
            ))}
          </section>
          <h2>My Games</h2>
          <section>
            {mygames.slice(0, 3).map((game) => (
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} />
            ))}
          </section>
          <h2>My Favourites</h2>
          <section>
            {mygames.filter((game) => game.fav).slice(0, 2).map((game) => (
              <GameCard key={game.id}
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`} />
            ))}
          </section>
        </>
      )
}


