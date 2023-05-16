export default function GameCard({name, image, genre, link}) { 
    return (
      <article className="game-card">
        <a href={link}>
        <img src={image} alt={name}/>
        </a>
        <h2>{name}</h2>
        <p>Genre: {genre}</p>
      </article>
    )
<<<<<<< HEAD
  }
=======
  }
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
