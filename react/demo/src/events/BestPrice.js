import React from 'react'

export default function BestPrice(props) {
  function show() {
    var bestPrice = props.price - (props.price * props.disrate / 100)
    alert(bestPrice)
  }
  return (
    <>
      <h1 className="text-danger">Sale</h1>
      <h3>Price : {props.price}</h3>
      <button onClick={show}>Show Best Price</button>
    </>
  )
}

