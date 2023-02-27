import React, { Component } from "react";

export class lifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Atoko",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB mounted");
  }

  shouldComponentUpdate() {
    console.log(" lifecylceB should component Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifeCycleB getSnapshotbeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecylceB component did update");
  }

  render() {
    console.log(" this is the render");
    return <div>lifecycleB</div>;
  }
}

export default lifecycleB;
