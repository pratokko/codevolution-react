import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        //  this.sayGoodBye = this.sayGoodBye.bind(this)
    }

    sayGoodBye = () =>{
        this.setState({
            message: 'GoodBye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={() => this.sayGoodBye()}>Click</button> */}
        <button onClick={this.sayGoodBye}>Click</button>
      </div>
    )
  }
}

export default EventBind