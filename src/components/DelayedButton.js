// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
  sendEventCopy = (event) => {
    event.persist()
    setTimeout(() => (this.props.onDelayedClick(event)), this.props.delay)
  }

  render() {
    return (
      <button
        onClick = {event => this.sendEventCopy(event)}
      />
    )
  }
}

export default DelayedButton