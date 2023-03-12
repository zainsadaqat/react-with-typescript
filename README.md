# Getting Started with Create React App with TypeScript

### Create react app with Typescript

```
npx create-react-app app-name --template typescript
```

### Passing (string, number, and boolean) Props in React with TypeScript

```typescript
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

// props: PropsType with colon inside the paranthesis is the syntax
```

### Passing Object Props in React with TypeScript

```typescript
type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.lastName}, {props.name.firstName}
    </div>
  );
};
// As we object is non-primitive data type that's why we have to define the object and pass the properties types as well.
```

### Passing Array Props in React with TypeScript

```typescript
type NameListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const NameList = (props: NameListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return <p key={name.firstName}>{name.firstName}</p>;
      })}
    </div>
  );
};

// props are object so names is treated as an object
```

### Passing Union Type in React with TypeScript

```typescript
type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
  let message = '';
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'Data fetched successfully';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }
  return <div>{message}</div>;
};
```

### Passing string Children props in React with TypeScript

```typescript
type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <p>{props.children}</p>;
};
```

### Passing React Component as Children in React with TypeScript

```typescript
type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

<Oscar>
  <Heading>Here's the Heading...</Heading>
</Oscar>;
```

### Passing Click Event as Props in React with TypeScript

```typescript
type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click me!</button>;
};
```

### Passing Click Event as Props with parameters in React with TypeScript

```typescript
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Button</button>;
};
```

### Passing Change Event as Props with parameters in React with TypeScript

```typescript
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
```

### Passing styles as props in React with TypeScript

```typescript
type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Here's the style</div>;
};

const App = () => {
  return <Container styles={{ border: '1px solid red' }} />;
};
```

### Destructuring Props

```typescript
const Input = ({ value, handleChange }: InputProps) => {};
```

### Export type

```typescript
export type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  }
}

import {PersonProps} from './file-name'
  }
```

### Type ReUsability

```typescript
export type Name = {
  firstName: string;
  lastName: string;
};

export type NameListProps = {
  names: Name[];
};
```

### Passing type to React useState hook

```typescript
type UserType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = React.useState<UserType | null>(null);
  return (
    <>
      <button
        onClick={() =>
          setUser({ name: 'zain sadaqat', email: 'zain@gmail.com' })
        }
      >
        Login
      </button>
      <button onClick={() => setUser(null)}>Logout</button>
      {user ? 'Logged In' : 'Logged Out'}
    </>
  );
};
```
