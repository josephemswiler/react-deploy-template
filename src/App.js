import React, { Component } from 'react'
import './App.css'

class App extends Component {

  style = () => ({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundImage: `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
      color: '#333'
    }
  })
  render () {
    return (
      <div style={this.style().app}>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App
