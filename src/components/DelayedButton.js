// Code DelayedButton Component Here
import React, {Component} from "react"
import { setTimeout } from "timers";
export default class DelayedButton extends Component  {
    handleClick = (event)=>{
        event.persist()
       setTimeout(()=>{return this.props.onDelayedClick(event)}, this.props.delay)
    }
    render(){
        return(<button onClick={this.handleClick}></button>)
    }
}