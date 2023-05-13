import {Outlet} from "react-router-dom"
import "./Dashboard.css"
import MyGames from './MyGames';
import MyFavourites from './MyFavourites';
import Gameshop from './gameshop'

export default function Dashboard(){ //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
    return (
        <>
        <div id="card">
                <header>
                    <h1> MACs Gamehub </h1>
                    <br></br>

                    <h2>GAMESHOP</h2>
                    <article className="Game-article1">
                    </article>
                </header>

                <main>
                    <h2>MY GAMES-LIBRARY</h2>
                    <article className="Game-article2">
                    </article>

                    <h2>MY FAVOURITES</h2>
                    <article className="Game-article3">
                    </article>
                </main>
            </div></>
    )
}

