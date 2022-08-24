import { Component } from "react";
import React from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'No clicks on this button'

        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You for Subscribing'
        })
    }

    changeMessage2() {
        this.setState({
            message: 'You clicked this button 2 times'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} onDoubleClick={() => this.changeMessage2()}>Subscribe</button>
            </div>


        )
    }
}
export default Message;
