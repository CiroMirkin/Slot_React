import './App.css'
import { shapes } from './shapes'
import { useEffect, useState } from 'react'

function App() {
  const [shape1, setShape1] = useState(0)
  const [shape2, setShape2] = useState(1)
  const [shape3, setShape3] = useState(2)

  const [times, setTimes] = useState(-1)

  const setShapes = () => {
    setShape1(Math.floor(Math.random() * shapes.length))
    setShape2(Math.floor(Math.random() * shapes.length))
    setShape3(Math.floor(Math.random() * shapes.length))
  }

  const getResultOfUserPlay = () => {
    if(shape1 === shape2 && shape2 === shape3) {
      // The three shapes are the same
      return ('You win')
    }
    else if (shape1 === shape2 || shape2 === shape3 || shape1 === shape3 || shape1 === shape2) {
      // Two shapes are the same
      return (50)
    }
    else {
      return ('you lost')
    }
  }

  const handleClick = () => {
    setTimes(5)

    console.log('click')
  }

  if(times > 0) {
    console.log('decremento ', times)

    const newTime = times - 1
    setTimes(newTime)

    setTimeout(setShapes, 1000)
  } 
  if(times === 0) getResultOfUserPlay()

  return (
    <>
      <h2>{}</h2>
      <div className="slot">
        <span>{shapes[shape1]}</span>
        <span>{shapes[shape2]}</span>
        <span>{shapes[shape3]}</span>
      </div>
      <button onClick={handleClick}>play</button>
    </>
  )
}

export default App
