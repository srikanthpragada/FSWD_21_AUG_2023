import React, { useState } from 'react'

function AddPassenger({ addNewPassenger }) {

    function addPassenger(e) {
        e.preventDefault()  // prevent page redraw by preventing submission
        const name = document.getElementById("txtName").value
        const mobile = document.getElementById("txtMobile").value
        addNewPassenger({ name: name, mobile: mobile }) // call parent's function
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name <br />
                <input type="text" id="txtName" required />
                <p></p>
                Mobile <br />
                <input type="text" id="txtMobile" required />
                <p></p>
                <button> Add</button>
            </form>
        </>
    )
}

function ListPassengers({ passengers, deletePassenger }) {
    return (
        <>
            <h3>Passengers</h3>
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th></th>
                </tr>
                <tbody>
                    {
                        passengers.map((p, idx) =>
                            <tr>
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

export default function Passengers() {
    const [passengers, setPassengers] = useState([])

    function addNewPassenger(passenger) {
        setPassengers([...passengers, passenger])
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
