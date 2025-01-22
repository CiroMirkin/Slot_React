import './Slot.css'
import { shapes } from './shapes'
import { useState, useEffect } from 'react'

/**
    @param s1 {number} Index of shape 1
    @param s2 {number} Index of shape 2
    @param s3 {number} Index of shape 3
*/
const getResultOfUserPlay = (s1, s2, s3) => {

    if (s1 === s2 && s2 === s3) {
        // The three shapes are the same
        return shapes[s2].pointsThree
    }

    const isThereTwoSeven = [s1, s2, s3].filter(s => s === 0).length == 2
    if (isThereTwoSeven) {
        return shapes[[s1, s2, s3].filter(s => s != 0).at(0)].pointsThree
    }

    if (s1 === s2 || s2 === s3) {
        if ([s1, s2, s3].includes(0)) {
            // Two shapes are the same and there is a comodin
            return shapes[s2].pointsThree
        }
        // Two shapes are the same
        return shapes[s2].pointsTwo
    }

    return (0)
}

const formatPoints = (points) => new Intl.NumberFormat("de-DE").format(points)

function Slot({ }) {
    const [shapesIndex, setShapesIndex] = useState([0, 1, 2])
    const [countOfSpins, setCountOfSpins] = useState(0)
    const [theSlotIsOn, setTheSlotIsOn] = useState(false)
    const [coins, setCoins] = useState(2000)

    const playResult = theSlotIsOn ? '???' : `+ ${formatPoints(getResultOfUserPlay(...shapesIndex))}`
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
        // If the play was made, the points will be added up
        if (theSlotIsOn == false) {
            const income = getResultOfUserPlay(...shapesIndex)
            const newAmountOfCoins = coins + income
            if(newAmountOfCoins > coins) setCoins(newAmountOfCoins)
        }
    }, [theSlotIsOn])

    useEffect(() => {
        const timer = setTimeout(() => {
            // If the slot is spinning
            if (theSlotIsOn && countOfSpins < amountOfSpins) setShapes()
        }, 250)
        return () => clearTimeout(timer)
    }, [countOfSpins, theSlotIsOn])

    const handleClick = () => {
        if(coins >= 100) {
            const newAmountOfCoins = coins - 100
            setCoins(newAmountOfCoins)
            setTheSlotIsOn(true)
        }
    }

    return (
        <>
        <header>
            <h1>Slot</h1>
            <p className="coins">{`$ ${formatPoints(coins)}`}</p>
        </header>
        
        <div className='slot-container'>
            <h3 className='play-result'>{ playResult }</h3>

            <div className="slot">
                <span className='slot__shape'>
                    { shapes[shapesIndex[0]].shape }
                </span>
                <span className='slot__shape'>
                    { shapes[shapesIndex[1]].shape }
                </span>
                <span className='slot__shape'>
                    { shapes[shapesIndex[2]].shape }
                </span>
            </div>

            <button
                type="button"
                onClick={ handleClick }
                className="nes-btn is-success"
            >Play</button>
        </div>
        </>
    )
}

export default Slot