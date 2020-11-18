import './App.css';
import {useState} from 'react'
import Person from './Person/Person'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ])

  const switchNameHandler = (newName) => {
    setPersons([
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ])
  }

  const nameChangedHandler = (event) => {
    setPersons([
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ])
  }

  const buttonStyle = {
    backgroundColor: 'white',
    border: '1px solid blue',
    cursor: 'pointer',
    font: 'inherit',
    padding: '8px',
  }

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <p>This is really working!</p>
      <button
        onClick={() => switchNameHandler('Maximilian')}
        style={buttonStyle}>Switch name
      </button>
      <Person
        name={persons[0].name}
        age={persons[0].age}/>
      <Person
        name={persons[1].name}
        age={persons[1].age}
        click={switchNameHandler.bind(this, 'Max!!')}
        change={nameChangedHandler}>My hobbies: Racing</Person>
      <Person
        name={persons[2].name}
        age={persons[2].age}/>
    </div>
  );
}

export default App;
