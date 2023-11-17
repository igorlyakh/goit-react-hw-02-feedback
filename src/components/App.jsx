import React, { Component } from 'react';
import Button from './Button';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

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
    return (
      <>
        <h2>Pleader leave feedback</h2>
        <Button onUpdate={() => this.onUpdate('good')} text="Good" />
        <Button onUpdate={() => this.onUpdate('neutral')} text="Neutral" />
        <Button onUpdate={() => this.onUpdate('bad')} text="Bad" />
        <FeedbackOptions />
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
          alert('Відгуків немає!')
        )}
      </>
    );
  }
}
