## Create React Application in TypeScript

`npx create-react-app <app-name> --template typescript`

### Handling States in Typescript

```
interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }
}

const [people, setPeople] = useState<IState["people"]>([{name: "", url: "", age: 0, note: "}]);
```

### Handling Props in Typescript

```
interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[]
}
// IProps is what type of props the component is receiving which is in my case an array of objects.
const List: React.FC<IProps> = ({people}) => <div>I'm a List</div>;
```

### Handling Functions in Typescript

```
// returning an array of jsx elements
const renderList = (): JSX.Element[] => {
  return people.map(person => {
    return (
      <li>{person.name}</li>
    )
  })
}
```

### Handling Events in Typescript

```
interface IProps {
  people: Props['poeple'];
  setPeople: React.Dispatch<React.SetStateAction<Props['poeple']>>;
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
```
