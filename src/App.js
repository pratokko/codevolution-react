import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Monyo" heroName="Beauty">
        <p> this is children props</p>
      </Greet>
      <Greet name="Yuddy" heroName="sista">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Ezzy" heroName="Mbunge" />
      <Welcome name="Monyo" heroName="Beauty" /> */}
      {/* <Welcome name="Yuddy" heroName="sista" />
      <Welcome name="Ezzy" heroName="Mbunge" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
{/* <FunctionClick />
<ClassClick /> */}
   {/* <ParentComponent /> */}
   {/* <UserGreeting /> */}
   {/* <NameList /> */}
   {/* <StyleSheet primary={false}/> */}
   <Inline />
    </div>
  );
}

export default App;
