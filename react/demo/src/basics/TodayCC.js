import React, { Component } from 'react'

export default class TodayCC extends Component {
  
  constructor() {
     super()
     // instance variable
     this.ct = new Date().toString()
  }
  render() {
    return (
       <h1 style={{color: 'white'}} 
           className="bg-danger">{this.ct}</h1>
    )
  }
}
