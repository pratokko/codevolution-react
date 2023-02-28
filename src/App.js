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
import "./appStyles.css";
import styles from "./appStyles.modules.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Clickcounter from "./components/Clickcounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterRen from "./components/CounterRen";
import ComponentC from "./components/ComponentC";
import ComponentE from "./components/ComponentE";
import ComponentF from "./components/ComponentF";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1> */}
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
      {/* <Inline /> */}

      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
   <Hero heroName = 'Batman' />
   </ErrorBoundary>
   <ErrorBoundary>

   <Hero heroName = 'Monyo' />
   </ErrorBoundary>
   <ErrorBoundary>
   <Hero heroName = 'joker' />
   </ErrorBoundary> */}
      {/* <Clickcounter name='Heivans' />
   <HoverCounter /> */}

      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Heivans" : "Guest")} /> */}
      {/* <CounterRen
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterRen
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
        /> */}
      <UserProvider value="Heivans">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
