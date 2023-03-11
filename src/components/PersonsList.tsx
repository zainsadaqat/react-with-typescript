import React from 'react';

type PersonsListProps = {
  nameList: { firstName: string; lastName: string }[];
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
