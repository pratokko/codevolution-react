import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {

     return this.state.isLoggedIn && <div>Welcome Heivans</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Heivans</div>
    // ) : (
    //   <div> Welcome Guest</div>
    // );

    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div> Welcome Heivans</div>
    // } else {
    //     message = <div> Welcome visitor</div>
    // }

    //  return <div> {message} </div>

    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>welcome Heivans</div>
    //     )
    // } else {
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //     <div>
    //         <div>welcome Heivans</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
