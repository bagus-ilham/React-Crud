import React from 'react'
import Button from './Button'
import { incrementCount } from './CountDownFunction'

const CountdownPlus = ({ count, setCount }) => {
    const handleIncrement = () => {
        incrementCount(count, setCount)
    }

    return (
        <div>
            <Button onClick={handleIncrement} text="Countdown +" />
        </div>
    )
}

export default CountdownPlus;

