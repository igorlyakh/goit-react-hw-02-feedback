import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdate = review => {
    this.setState(prevState => {
      return {
        [review]: prevState[review] + 1,
      };
    });
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPercent = () => {
    const { good } = this.state;
    const total = this.getTotal();
    return (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.getTotal();
    const percentGood = this.getPercent();
    const options = Object.keys(this.state);
    return (
      <>
        <h2>Pleader leave feedback</h2>
        <FeedbackOptions variables={options} onUpdate={this.onUpdate} />
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percentGood}
          />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
