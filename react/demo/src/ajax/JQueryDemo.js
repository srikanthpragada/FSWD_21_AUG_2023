import React, {useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')
   

    function getDateTime() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Asia/Kolkata',
                  (data) => setNow(data.datetime) )
    }

    function getDateTimeUTC() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Etc/UTC',
                      (data) => setNow(data.datetime) )
    }

    return (
        <>
            <h2>AJAX with jQuery</h2>
            <h1>{now}</h1>
            <button onClick={getDateTime}>Get IST</button>
            &nbsp;
            <button onClick={getDateTimeUTC}>Get UTC </button>
        </>
    )
}
