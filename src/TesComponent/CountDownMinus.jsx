import React from 'react'
import Button from './Button'
import { decrementCount } from './CountDownFunction'

const CountdownMinus = ({ count, setCount }) => {
    const handleDecrement = () => {
        decrementCount(count, setCount)
    }

    return (
        <div>
            <Button onClick={handleDecrement} text="Countdown -" />
        </div>
    )
}

export default CountdownMinus
