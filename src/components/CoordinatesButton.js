import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
  handleClick = (e) => {
    const coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coord Button</button>
      </div>
    );
  }

}
