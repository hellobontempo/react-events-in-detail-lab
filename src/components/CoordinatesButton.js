// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    render(){
        console.log(this.props)
        return(
            <button onClick={this.handleClick}> I am button </button>
        )
    }

    handleClick = (event) => {
        let array = [event.clientY, event.clientX]
        this.props.onReceiveCoordinates(array)
    }
}