import React, { Component } from "react";
import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
