import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Greet from './Compone/Greet';
import { Welcome } from './Compone/Welcome';
import Message from './Compone/Message';
import counter from './Compone/Counter';
import Counter from './Compone/Counter';
import FunctionClick from './Compone/FunctionClick';
import EventBind from './Compone/EventBind';
import ParentComponent from './Compone/ParentComponent';
import UserGreeting from './Compone/UserGreeting';
// class App extends React.Component {
//   render() {

//   }
// }

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Siddhesh" /> */}
      {/*<Welcome /> */}
    </div>
  );
}

export default App;
