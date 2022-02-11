import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        console.log("Counter.js constructor")
        super(props)
        this.state = {
            x: 0
        }

    }

    inc = () => {
        this.setState({
            x: this.state.x + 1
        })
    }
    dec = () => {
        this.setState({
            x: this.state.x - 1
        })
    }



    // componentDidMount() {
    //     console.log("Counter.js componentDidMount");
    // }
    // componentDidUpdate() {
    //     console.log("Counter.js componentDidUpdate");
    // }
    componentWillUnmount() {
        console.log("Counter.js componentWillUnmount");
    }




    render() {
        console.log("Counter.js render");
        return (
            <div>
                <h2> -- Counter -- </h2>

                <button onClick={this.inc}>+</button>
                <h1>{this.state.x}</h1>
                <button onClick={this.dec} >-</button>
            </div>
        )
    }
}
