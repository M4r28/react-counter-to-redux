import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./Reducers";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

//remember to attach devtool
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }

  Reset = () => {
    this.setState({ count: 0 });
  };

  // IncrementItem = () => {
  //   //WRONG! ANTIPATTERN!
  //   //this.setState({count: this.state.count + 1})
  //   //CORRECT prevState func
  //   this.setState(prevState => {
  //     console.log("This is prev", prevState)
  //     return { count: prevState.count + 1 }
  //   })
  // }

  // DecreaseItem = () => {
  //   this.setState(
  //     prevState => {
  //       console.log("This is prev", prevState)
  //       return { count: prevState.count - 1 }
  //     }
  //   )
  // }

  updateCounter = type => {
    switch (type) {
      case "INCREMENT":
        console.log("Going to increment");
        return this.setState(state => {
          return {
            count: state.count + 1
          };
        });

      case "DECREMENT":
        console.log("Going to decrement");
        return this.setState(state => {
          return {
            count: state.count - 1
          };
        });
      default:
        return this.state;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Provider store={store}>
            <Counter />
            <Footer />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
