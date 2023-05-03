import { useState, useEffect } from "react"

export default function GameCard({gameId}) {
    const [game, setGame] = useState(null)
    const apiKey = 'be9e1b206b684a099d8c1813a128a044'
    
    useEffect(() => {
      async function fetchGame() {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`)
        const data = await response.json()
        setGame(data)
      }
      fetchGame();
    }, [gameId, apiKey])
    
    if (!game) {
      return <span>Loading...</span>
    }
    
    const { name, background_image, rating, released, platforms } = game
    
    return (
      <section className="game-card">
        <img src={background_image} alt={name} />
        <h2>{name}</h2>
        <p>Rating: {rating}/5</p>
        <p>Released: {released}</p>
        <p>Platforms: {platforms.map(platform => platform.platform.name).join(', ')}</p>
      </section>
    )
  }
