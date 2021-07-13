// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    generateText = () => {
        if (this.state.secondsLeft === 0){
            return "Boom!"
        } else {
            `${this.state.secondsLeft} seconds left before I go boom!` 
        }
    }


    render(){
        return this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    }
}