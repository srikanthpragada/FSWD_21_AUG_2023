import React, { useState, useEffect } from 'react'

export default function ListCountries() {
    const [countries, setCountries] = useState([])

    useEffect(() => { getCountries() }, [])

    async function getCountries() {
        let response = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,region`)
        let data = await response.json()
        setCountries(data)
    }


    return (
        <>
            <h1>Countries</h1>
            {
                countries.map((country, idx) =>
                    <div key={idx}>
                        <h2>{country.name.common},
                            {country.region}</h2>
                        <img src={country.flags.png}
                            alt=""
                            style={{ width: '200px', height: '100px' }}></img>
                        <p></p>

                    </div>

                )
            }

        </>
    )
}
