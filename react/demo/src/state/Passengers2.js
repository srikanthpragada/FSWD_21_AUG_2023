// Demo for two-way data binding

import React, { useState } from 'react'

function AddPassenger({ addNewPassenger }) {
    const [passenger, setPassenger] = useState({ name: 'Srikanth', mobile: '939393922' })

    function addPassenger(e) {
        e.preventDefault()  // prevent page redraw by preventing submission
        addNewPassenger(passenger) // call parent's function
    }

    // function updateName(e) {
    //     // console.log(e.target.value)
    //     setPassenger({ ...passenger, name: e.target.value })
    // }

    // function updateMobile(e) {
    //     // console.log(e.target.value)
    //     setPassenger({ ...passenger, mobile: e.target.value })
    // }

    function updateText(e) {
        let field = e.target.name 
        setPassenger({ ...passenger, [field]: e.target.value })
    }

    function clearForm(e) {
        e.preventDefault()
        setPassenger( {name :"", mobile :""})
    }
    return (
        <>
            <form onSubmit={addPassenger}>
                Name <br />
                <input type="text" name="name" required
                    value={passenger.name}
                    onChange={updateText}
                />
                <p></p>
                Mobile <br />
                <input type="text" name="mobile" required
                    value={passenger.mobile}
                    onChange={updateText} />
                <p></p>
                <button>Add</button>
                <button onClick={clearForm}>Clear</button>
            </form>
           
        </>
    )
}

function ListPassengers({ passengers, deletePassenger }) {
    return (
        <>
            <h3>Passengers</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passengers.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.mobile}</td>
                                <td className="text-center">
                                    <button
                                        onClick={() => deletePassenger(idx)}
                                        className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default function Passengers2() {
    const [passengers, setPassengers] = useState([])

    function addNewPassenger(passenger) {
        // check whether passenger is already present 
        var found = passengers.find((p) => p.name === passenger.name)
        if (!found)
            setPassengers([...passengers, passenger])
        else
            alert("Sorry! Duplicate Passenger Name!")

    }

    function deletePassenger(indexToRemove) {
        setPassengers(passengers.filter((p, index) => index !== indexToRemove))
    }

    return (
        <>
            <h1>Passengers</h1>
            <AddPassenger addNewPassenger={addNewPassenger} />
            <p></p>
            {passengers.length > 0 &&
                <ListPassengers deletePassenger={deletePassenger}
                    passengers={passengers} />
            }
        </>
    )
}
