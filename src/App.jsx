import seven from './assets/seven.png'
import bar from './assets/bar.png'
import bell from './assets/bell.png'
import cherry from './assets/cherry.png'
import grapes from './assets/grapes.png'
import lemon from './assets/lemon.png'
import watermelon from './assets/watermelon.png'

const shapes = Object.freeze([
  <img src={seven} className="shape" alt="seven shape" />,
  <img src={bar} className="shape" alt="bar shape" />,
  <img src={bell} className="shape" alt="bell shape" />,
  <img src={cherry} className="shape" alt="cherry shape" />,
  <img src={grapes} className="shape" alt="grapes shape" />,
  <img src={lemon} className="shape" alt="lemon shape" />,
  <img src={watermelon} className="shape" alt=" watermelon shape" />,
])

import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [shape1, setShape1] = useState(0)
  const [shape2, setShape2] = useState(1)
  const [shape3, setShape3] = useState(2)

  const setShapes = () => {
    setShape1(Math.floor(Math.random() * shapes.length))
    setShape2(Math.floor(Math.random() * shapes.length))
    setShape3(Math.floor(Math.random() * shapes.length))
  }

  const getResultOfUserPlay = () => {
    if(shape1 === shape2 && shape2 === shape3) {
      return ('You win')
    }
    else if (shape1 === shape2 || shape2 === shape3 || shape1 === shape3 || shape1 === shape2) {
      return (50)
    }
    else {
      return ('you lost')
    }
  }

  const handleClick = () => {
    setShapes()
  }

  return (
    <>
      <h2>{getResultOfUserPlay()}</h2>
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
