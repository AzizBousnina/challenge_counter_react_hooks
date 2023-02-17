import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incr = () =>{
        setCount (count+1)
    }
    const decr = () => {
        count>0 && setCount(count-1)
    }
  return (
    <div>
        <button onClick={incr}>+</button>
        <span>{count}</span>
        <button onClick={decr}>-</button>
    </div>
  )
}

export default Counter