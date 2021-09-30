import React from "react";
import { hot } from "react-hot-loader";
import "/App.css";

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
  </div>
);

export default hot(module)(App);

//hotloader this will allows us to see webpage without refreshing page
