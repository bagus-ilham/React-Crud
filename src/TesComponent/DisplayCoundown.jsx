import { useState } from "react"
import { CountdownDisplay } from "./CountDownFunction"
import CountdownMinus from "./CountDownMinus"
import CountdownPlus from "./CountDownPlus"

const DisplayCountdown = () => {

    
  const [count, setCount] = useState(1)

    return (
        <div>[]
            <CountdownDisplay count={count} />
            <CountdownMinus count={count} setCount={setCount} />
            <CountdownPlus count={count} setCount={setCount} />
        </div>
    )
}

export default DisplayCountdown