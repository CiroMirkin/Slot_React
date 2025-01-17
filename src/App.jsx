import './App.css'
import { shapes } from './shapes'
import { useState, useEffect } from 'react'

function App() {
  const [shape1, setShape1] = useState(0)
  const [shape2, setShape2] = useState(1)
  const [shape3, setShape3] = useState(2)

  const [count, setCount] = useState(0)
  const [state, setState] = useState(false)

  const [play, setPlay] = useState("")

  const amountOfSpins = 11

  const setShapes = () => {
    console.log("change ", count)

    setCount(count + 1)

    setShape1(Math.floor(Math.random() * shapes.length))
    setShape2(Math.floor(Math.random() * shapes.length))
    setShape3(Math.floor(Math.random() * shapes.length))

  }

  const getResultOfUserPlay = (s1, s2, s3) => {
    if (s1 === s2 && s2 === s3) {
      // The three ss are the same
      return ('You win')
    }
    else if (s1 === s2 || s2 === s3 || s1 === s3 || s1 === s2) {
      // Two shapes are the same
      return (50)
    }
    else {
      return ('you lost')
    }
  }

  const handleClick = () => {
    setState(true)
    console.log('click')
  }

  if (count === amountOfSpins) {
    setPlay(getResultOfUserPlay(shape1, shape2, shape3))
    setState(false)
    setCount(0)
  }

  useEffect(() => {

    const timer = setTimeout(() => {

    if (state && count < amountOfSpins) {
      setShapes()
    }

    }, 500)

    return () => clearTimeout(timer)
  }, [count, state]);

  return (
    <>
      <h2>{play}</h2>
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
