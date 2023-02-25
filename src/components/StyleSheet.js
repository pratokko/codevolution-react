import React from "react";
import "./myStyles.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "secondary";
  return <div className={className}>StyleSheet</div>;
}

export default StyleSheet;
