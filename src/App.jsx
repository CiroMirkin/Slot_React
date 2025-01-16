import './App.css'
import { shapes } from './shapes'
import { useState } from 'react'

function App() {
  const [shape1, setShape1] = useState([ 0, 1, 4, 3, 0 ])
  const [shape2, setShape2] = useState([ 0, 1, 4, 3, 1 ])
  const [shape3, setShape3] = useState([ 0, 1, 4, 3, 2 ])

  const setShapes = () => {
    const shapes1 = Array(5).fill(0).map(s => Math.floor(Math.random() * shapes.length)) 
    setShape1([...shapes1])
    
    const shapes2 = Array(5).fill(0).map(s => Math.floor(Math.random() * shapes.length)) 
    setShape2([...shapes2])

    const shapes3 = Array(5).fill(0).map(s => Math.floor(Math.random() * shapes.length)) 
    setShape3([...shapes3])
  }

  const getResultOfUserPlay = (s1, s2, s3) => {
    if(s1 === s2 && s2 === s3) {
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

  const [shapesIndex, setShapesIndex] = useState(0)

  const handleClick = () => {
    setShapesIndex(0)
    setShapes()

    console.log('click')
  }


  setInterval(() => {
    if(shapesIndex <= 5) {
      const newShapesIndex = shapesIndex + 1
      setShapesIndex(newShapesIndex)
    }
  }, 1000)

  return (
    <>
      <h2>{ getResultOfUserPlay(shape1.at(-1), shape2.at(-1), shape3.at(-1)) }</h2>
      <div className="slot">
        <span>{ shapes[shape1[shapesIndex]] }</span>
        <span>{ shapes[shape2[shapesIndex]] }</span>
        <span>{ shapes[shape3[shapesIndex]] }</span>
      </div>
      <button onClick={handleClick}>play</button>
    </>
  )
}

export default App
