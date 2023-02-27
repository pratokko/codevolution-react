import React, { Component } from 'react'
import FrInput from './FrInput'

 class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler  = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <FrInput ref= {this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput