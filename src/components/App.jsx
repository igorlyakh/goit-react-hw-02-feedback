import React, { Component } from 'react';
import Button from './Button';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdate = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <>
        <h2>Pleader leave feedback</h2>
        <Button onUpdate={this.onUpdate} text="Good" />
        <Button text="Neutral" />
        <Button text="Bad" />
        <h2>Statistics</h2>
        {total > 0 && (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        )}
      </>
    );
  }
}
