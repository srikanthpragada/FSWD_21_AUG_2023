import React from 'react'

function ShowProduct({product}) {
  function show() {
    var bestPrice = product.price - (product.price * product.disrate / 100)
    alert(bestPrice)
  }
  return (
    <>
      <h1 className="text-danger">Sale</h1>
      <h3>Price : {product.price}</h3>
      <button onClick={show}>Show Best Price</button>
      <hr/>
    </>
  )
}

export default function ListProducts() {

  const products = [ 
    { price : 100000, disrate : 10},
    { price : 150000, disrate : 15},
    { price : 50000, disrate : 25}
  ]
  return(
     <>
        <h1>Products</h1>    
        {
          products.map( (prod, idx) =>
                 <ShowProduct product = {prod} key = {idx} />
          )
        }
     </>

  )
}
