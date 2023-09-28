import React, { useState } from 'react'

export default function Counter() {
    let [counter, setCounter] = useState(0)

    function inc() {
        setCounter(counter + 1)
    }
    function dec() {
        setCounter(counter - 1)
    }

    return (
        <>
            <h3>Counter Demo</h3>
            <h1>{counter}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>

        </>
    )
}
