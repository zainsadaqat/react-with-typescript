import React from 'react';

type GreetProps = {
  name: string;
  messageCount?: number; //Optional Prop
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Hi ${props.name}, you've ${props.messageCount} unread messages!`
        : `Hi Guest!`}
    </div>
  );
};

export default Greet;
