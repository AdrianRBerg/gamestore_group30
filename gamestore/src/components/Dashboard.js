import {Outlet} from "react-router-dom"
import "./Dashboard.css"
import MyGames from './MyGames';
import MyFavourites from './MyFavourites';
import Gameshop from './gameshop'
import  Nav  from './Nav';

export default function Dashboard(){ //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
    return (
        <>
        <div id="card">
                <Nav>
                <h1> MACs Gamehub </h1>
                </Nav>
                <br></br>

                <header>
                     <h2>GAMESHOP</h2>
                </header>

                <main>
                    <article className="Game-article1">
                    </article>
                    
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

