import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parentname'
        }

    }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`)
        console.log(this);
    }
    render() {
        return (
            <div>

                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent