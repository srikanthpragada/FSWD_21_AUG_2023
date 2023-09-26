import React from 'react'

export default function Wish() {
    var hours = new Date().getHours()
    var msg = "Good Evening"
    if (hours < 12)
        msg = "Good Morning"
    else
        if (hours < 17)
            msg = "Good Afternoon"

    return (
        <h1>{msg}</h1>
    )
}
