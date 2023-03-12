import { PersonProps } from './Person.types';

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.lastName}, {props.name.firstName}
    </div>
  );
};

export default Person;
