import React from 'react'

export default function Course(props) {
  // add tax to fee
  let finalFee = props.fee + props.fee * 15 / 100 

  return (
    <>
     <h2 className="text-danger">{props.title}</h2>
     <h3 className="text-primary">{props.fee}</h3>
     <h3 className="text-success">{finalFee}</h3>
     <hr/>
    </>
  )
}
