import React from 'react'

export default function OldCounter() {
    let counter = 0;

    function inc() {
        counter++;
        console.log(counter)
    }

    return (
        <>
            <h3>Counter Demo</h3>
            <h1>{counter}</h1>
            <button onClick={inc}>Increment</button>

        </>
    )
}
