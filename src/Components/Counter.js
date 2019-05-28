import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    //now we dispatch action
    this.props.dispatch({ type: "INCREMENT" });

    console.log("Want increment");
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });

    console.log("Want decrement");
  };

  reset =()=>{
    this.props.dispatch({type: "RESET"});
  }

  render() {
    return (
      <div>
        <h2>Counter with Redux</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div> Count: {this.props.count} </div>
        <div> Clicks: {this.props.click} </div>
        <button onClick={this.reset}>Reset</button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    click: state.click
  };
};

export default connect(mapStateToProps)(Counter);
