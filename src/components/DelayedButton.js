// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {


    render (){

        return (
            <button onClick={this.handleClick} >slowwww button</button>
        )
    }

    handleClick = (event) => {
        event.persist()
        setTimeout(()=> this.props.onDelayedClick(event), this.props.delay)
    }
}