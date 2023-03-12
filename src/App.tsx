import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonsList from './components/PersonsList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';

function App() {
  const name = {
    firstName: 'Zain',
    lastName: 'Sadaqat',
  };

  const nameList = [
    {
      firstName: 'Zain1',
      lastName: 'Sadaqat',
    },
    {
      firstName: 'Zain2',
      lastName: 'Sadaqat',
    },
    {
      firstName: 'Zain3',
      lastName: 'Sadaqat',
    },
  ];
  return (
    <div className="App">
      <Greet name="Zain Sadaqat" messageCount={14} isLoggedIn={true} />
      <Person name={name} />
      <PersonsList nameList={nameList} />
      <Status status="success" />
      <Oscar>
        <Heading>Here's the heading</Heading>
      </Oscar>
      <Button handleClick={() => console.log('Handle Click Event')} />
    </div>
  );
}

export default App;
