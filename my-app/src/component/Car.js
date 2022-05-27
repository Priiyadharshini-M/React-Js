import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <div>
                <h4>Model : {this.props.model}</h4>
                <h4>Color : {this.props.color}</h4>
                {this.props.children}
            </div>
        )
    }
}

export default Car