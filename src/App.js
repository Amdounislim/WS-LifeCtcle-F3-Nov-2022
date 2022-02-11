import React, { Component } from 'react'
import './App.css'
import Counter from './Components/Counter'

export default class App extends Component {
  constructor(props) {
    console.log("App.js Constructor")
    super(props)
    this.state = {
      show: true
    }
  }



  componentDidMount() {
    console.log("App.js componentDidMount");
    // this.setState({ count: 2 })
  }

  render() {
    console.log("App.js render")
    return (
      <div className='App'>
        <h1>React LifeCycle methods</h1>
        <button onClick={() => this.setState({ show: !this.state.show })} >Toggle</button>
        {this.state.show && <Counter />}
      </div>
    )
  }
}
