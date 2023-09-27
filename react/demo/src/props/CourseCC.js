// Class component with Properties 

import React, { Component } from 'react'

export default class CourseCC extends Component {
    constructor(props) {
        super()
        this.title = props.title
        this.fee = props.fee
    }
    finalFee() {
        return this.fee + this.fee * 15 / 100
    }
    render() {
        return (
            <>
                <h2 className="text-danger">{this.title}</h2>
                <h3 className="text-primary">{this.fee}</h3>
                <h3 className="text-success">{this.finalFee()}</h3>
                <hr />
            </>
        )
    }
}
