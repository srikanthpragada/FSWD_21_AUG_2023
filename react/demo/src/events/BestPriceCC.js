import React from 'react'

export default class BestPrice extends React.Component {

  constructor(props) {
      super()
      this.price = props.price
      this.disrate  = props.disrate 
      this.show = this.show.bind(this);
  }
  show() {
    // console.log(this)
     var bestPrice = this.price - (this.price * this.disrate/100)
     alert(bestPrice)
  }

  render() {
    return (
      <>
        <h1 className="text-danger">Sale</h1>
        <h3>Price : {this.price}</h3>
        <button onClick={this.show}>Show Best Price</button>
      </>
    )
  }

}