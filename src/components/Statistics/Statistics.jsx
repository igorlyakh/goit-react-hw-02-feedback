import React from 'react';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
    </List>
  );
};

export default Statistics;
