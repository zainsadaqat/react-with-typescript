import React from 'react';
import { Name } from './Person.types';

type PersonsListProps = {
  nameList: Name[];
};

const PersonsList = (props: PersonsListProps) => {
  return (
    <div>
      -
      {props.nameList.map((first) => (
        <p>{first.firstName}</p>
      ))}
    </div>
  );
};

export default PersonsList;
