import React from "react";
import {incrementCounter, counter} from "flux/counter";
import {connect} from "react-redux";
import Button from 'components/Button';

@connect(
  state => ({counter: counter(state)}),
  {incrementCounter}
)
export default class Counter extends React.Component {
  render() {
    const {incrementCounter, counter} = this.props;
    return (
      <div>
        <h3>{counter}</h3>
        <Button onClick={() => incrementCounter()}>Increment</Button>
      </div>
    );
  }
}
