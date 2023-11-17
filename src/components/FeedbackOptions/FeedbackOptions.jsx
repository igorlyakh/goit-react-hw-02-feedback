import Button from 'components/Button';
import React from 'react';

const FeedbackOptions = ({ variables, onUpdate }) => {
  const options = Object.keys(variables);
  return (
    <div>
      {options.map(item => {
        return (
          <Button
            key={item}
            onUpdate={() => onUpdate(item)}
            text={item.replace(item[0], item[0].toUpperCase())}
          />
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
