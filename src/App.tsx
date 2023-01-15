import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'

interface CardProps {
  title: string,
  description: string,
  image: string
}

const Card = (props: CardProps) => {
  return (
      <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 0px 8px #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
          <div>
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              <img src={props.image} alt={props.title}/>
          </div>
      </div>
  )
}

const App = () => {
  const [cards, setCards] = useState([
    { title: "Card 1", description: "This is card 1", image: "https://dummyimage.com/400x400/000/fff" },
    { title: "Card 2", description: "This is card 2", image: "https://dummyimage.com/400x400/000/fff" },
    { title: "Card 3", description: "This is card 3", image: "https://dummyimage.com/400x400/000/fff" },
    { title: "Card 4", description: "This is card 4", image: "https://dummyimage.com/400x400/000/fff" }
  ])

  const onSwipe = (direction: string) => {
    console.log(`You swiped: ${direction}`)
  }
  
  const onCardLeftScreen = (title: string) => {
    console.log(`${title} left the screen`)
    setCards(cards.filter(card => card.title !== title))
  }
  
  return (
    <div>
      {cards.map(card => (
        <TinderCard key={card.title} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(card.title)}>
          <Card {...card} />
        </TinderCard>
      ))}
    </div>
  )
}

export default App;
