import './Slot.css'
import { shapes } from './shapes'
import { useState, useEffect } from 'react'

const getResultOfUserPlay = (s1, s2, s3) => {
    if (s1 === s2 && s2 === s3) {
        // The three shapes are the same
        return ('You win')
    }
    else if (s1 === s2 || s2 === s3 || s1 === s3 || s1 === s2) {
        // Two shapes are the same
        return ('50 points')
    }
    else {
        return ('You lost')
    }
}

function Slot({ }) {
    const [shapesIndex, setShapesIndex] = useState([0, 1, 2])
    const [countOfSpins, setCountOfSpins] = useState(0)
    const [theSlotIsOn, setTheSlotIsOn] = useState(false)

    const playResult = theSlotIsOn ? '???' : getResultOfUserPlay(...shapesIndex)
    const amountOfSpins = 11

    const setShapes = () => {
        setCountOfSpins(countOfSpins + 1)

        const newShapesIndex = [
            Math.floor(Math.random() * shapes.length),
            Math.floor(Math.random() * shapes.length),
            Math.floor(Math.random() * shapes.length),
        ]
        setShapesIndex([...newShapesIndex])
    }

    // If the slot made all the spins it has to make
    if (countOfSpins === amountOfSpins) {
        setTheSlotIsOn(false)
        setCountOfSpins(0)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            // If the slot is spinning
            if (theSlotIsOn && countOfSpins < amountOfSpins) setShapes()
        }, 300)
        return () => clearTimeout(timer)
    }, [countOfSpins, theSlotIsOn])

    const handleClick = () => setTheSlotIsOn(true)

    return (
        <>
            <h3 
                className={`nes-text is-${playResult == 'you lost' ? 'error' : 'success'}`}
            >
                    { playResult }
            </h3>

            <div className="slot">
                <span className='slot__shape'>
                    {shapes[shapesIndex[0]]}
                </span>
                <span className='slot__shape'>
                    {shapes[shapesIndex[1]]}
                </span>
                <span className='slot__shape'>
                    {shapes[shapesIndex[2]]}
                </span>
            </div>

            <button type="button" onClick={handleClick} class="nes-btn is-success">Play</button>
        </>
    )
}

export default Slot