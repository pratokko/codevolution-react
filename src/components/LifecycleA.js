import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Heivans",
    };
    console.log("lifecycleA constuctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleAgetDerivedStatefromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log(" lifecycleA should component Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycle A getSnapshotbeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleA component did update");
  }

  changeState = () => {
    this.setState({
      name: "baba zero",
    });
  };

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}

export default LifecycleA;
