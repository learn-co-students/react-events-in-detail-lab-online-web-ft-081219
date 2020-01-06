// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {


      constructor(props){
          super(props)
      }

    render() {
        return (
            <div>
                <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}></button>
            </div>
        )
    }
}
