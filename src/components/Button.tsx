import React from 'react';

type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Button</button>;
};

export default Button;
