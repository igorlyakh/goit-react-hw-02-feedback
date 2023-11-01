import React, { Component } from 'react';
import Button from './Button';
import Statistics from './Statistics';

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

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const procentGood = (good / total) * 100;
    return (
      <>
        <h2>Pleader leave feedback</h2>
        <Button onUpdate={() => this.onUpdate('good')} text="Good" />
        <Button onUpdate={() => this.onUpdate('neutral')} text="Neutral" />
        <Button onUpdate={() => this.onUpdate('bad')} text="Bad" />
        <h2>Statistics</h2>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            procent={procentGood}
          />
        )}
      </>
    );
  }
}
