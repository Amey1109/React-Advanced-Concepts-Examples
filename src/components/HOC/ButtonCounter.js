import React, { Component } from 'react'

import counter from "./counter"

class ButtonCounter extends Component {
    render() {

        const {count,handleCounter} = this.props
        return (
            <div>
                <button onClick={handleCounter}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default counter(ButtonCounter)
