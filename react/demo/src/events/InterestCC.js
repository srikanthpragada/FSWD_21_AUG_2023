import React from 'react'

export default class InterestCC extends React.Component {

  calculate() {
    var amount = document.getElementById("txtAmount").value
    var rate = document.getElementById("txtRate").value
    var interest = amount * rate / 100
    alert(interest)
  }

  render() {
    return (
      <>
        <h2>Interest Calculation</h2>
        Deposit Amount <br />
        <input type="number" id="txtAmount" />
        <p></p>

        Interest Rate <br />
        <input type="number" id="txtRate" />
        <p></p>
        <button onClick={this.calculate}>Calculate</button>

      </>
    )
  }

}