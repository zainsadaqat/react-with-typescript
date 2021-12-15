import { useState, FC } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';

export interface IState {
  poeple: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App: FC = () => {
  const [people, setPeople] = useState<IState['poeple']>([
    {
      name: 'Zain Sadaqat',
      url: 'https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      age: 23,
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veritatis',
    },
    {
      name: 'Zain Sadaqat 2',
      url: 'https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      age: 20,
      note: 'Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Ducimus, veritatis',
    },
  ]);
  return (
    <section className="App">
      <h2>People Invited to the Party!</h2>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </section>
  );
};

export default App;
