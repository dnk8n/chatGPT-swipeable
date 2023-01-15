import { useSwipeable } from 'react-swipeable'

const useSwipeHandler = () => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log("User Swiped!", eventData)
    },
    rotationAngle: 10,
  });
  return handlers
}

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
  const swipeHandlers = useSwipeHandler()
  return (
    <div {...swipeHandlers}>
      <Card title="Card Title" description="Card Description" image="https://dummyimage.com/400x400/000/fff"/>
    </div>
  )
}

export default App;
