import React from "react";
import ReactDOM from "react-dom";
import Dog from "./dog";
import Robot from "./robot";
import HOC from "./HOC";
import "./styles.css";

const HDog = HOC(Dog);

function App() {
  return (
    <div className="App">
      <Dog />
      <Robot />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
