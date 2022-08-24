import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: false
        }
    }
    render() {
        if (this.state.isLoggedin) {
            return (

                <div>

                    <h1>Hello Peter</h1>

                </div>
            )
        }
        else {
            return (

                <div>

                    <h1>Hello Stranger</h1>

                </div>
            )
        }

    }
}

export default UserGreeting