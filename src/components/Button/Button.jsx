import React from 'react';
import { ButtonReview } from './Button.styled';

const Button = ({ text, onUpdate }) => {
  return <ButtonReview onClick={onUpdate}>{text}</ButtonReview>;
};

export default Button;
