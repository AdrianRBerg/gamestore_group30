import {Outlet} from "react-router-dom"
import "./Dashboard.css"
import MyGames from './MyGames';
import MyFavourites from './MyFavourites';
import Gameshop from './gameshop'
import { Navbar } from "react-bootstrap";

export default function Dashboard(){ //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
    return (
        <>
        <div id="card">
                <Navbar>
                <h1> MACs Gamehub </h1>
                </Navbar>
                <br></br>

                <header>
                     <h2>GAMESHOP</h2>
                </header>

                        <div class="gameshop-container">
            <h1 class="gameshop-heading">GAMESHOP</h1>
            <button class="visit-shop-button">Visit Shop</button>
            </div>

            <div class="movie-container">
            <article class="movie-card">
                <div class="movie-image">
                <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg"/>
                </div>
                <div class="movie-details">
                <h2 class="movie-title">Three Days of the Condor</h2>
                <p class="movie-genre">Action</p>
                <button class="buy-button">BUY</button>
                </div>
            </article>

            <article class="movie-card">
                <div class="movie-image">
                <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg"/>
                </div>
                <div class="movie-details">
                <h2 class="movie-title">Three Days of the Condor</h2>
                <p class="movie-genre">Comedy</p>
                <button class="buy-button">BUY</button>
                </div>
            </article>

            <article class="movie-card">
                <div class="movie-image">
                <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg"/>
                </div>
                <div class="movie-details">
                <h2 class="movie-title">Three Days of the Condor</h2>
                <p class="movie-genre">Drama</p>
                <button class="buy-button">BUY</button>
                </div>
            </article>
            </div>
            <main>
      <h1 class="my-games-heading">MY GAMES LIBRARY</h1>
    
      <div class="container">
        <section class="movie-section">
          <div class="movcontainer">
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 1"/>
              <h2 class="mov-title">Movie 1</h2>
              <p class="mov-genre">Genre 1</p>
            </article>
    
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 2"/>
              <h2 class="mov-title">Movie 2</h2>
              <p class="mov-genre">Genre 2</p>
            </article>
    
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 3"/>
              <h2 class="mov-title">Movie 3</h2>
              <p class="mov-genre">Genre 3</p>
            </article>
          </div>
          <button class="libbutton">Go To Library</button>
        </section>
        
        <aside class="aside-section">
          <div class="movcontainer-aside">
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 1"/>
              <h2 class="mov-title">Movie 1</h2>
              <p class="mov-genre">Genre 1</p>
            </article>
    
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 2"/>
              <h2 class="mov-title">Movie 2</h2>
              <p class="mov-genre">Genre 2</p>
            </article>
    
            <article class="movie">
              <img src="La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg" alt="Movie 3"/>
              <h2 class="mov-title">Movie 3</h2>
              <p class="mov-genre">Genre 3</p>
            </article>
          </div>
          <button class="favbutton">Go To Favorites</button>
        </aside>
      </div>
    </main>
    
            </div></>
    )
}

