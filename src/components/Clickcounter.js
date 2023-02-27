import React, { Component } from "react";
import UpdatedComponent from "./WIthCounter";

class Clickcounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}> Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(Clickcounter);
