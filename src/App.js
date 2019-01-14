import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header.js";
import HelpPage from "./components/HelpPage";
import HomePage from "./components/HomePage";
import todosReducer from "./reducers/reducer";

class App extends Component {
  render() {
    const store = createStore(
      todosReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/help" component={HelpPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
