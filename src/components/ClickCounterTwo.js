import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
    

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Increnent {count}</button>
      </div>
    )
  }
}

export default ClickCounterTwo