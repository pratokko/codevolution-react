import React, { Component } from "react";
import UpdatedComponent from "./WIthCounter";

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return <h2 onMouseOver={increment}> Hovered {count} times</h2>;
  }
}

export default UpdatedComponent(HoverCounter);
