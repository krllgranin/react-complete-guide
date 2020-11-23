import './App.css';
import {useState} from 'react'
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


function App() {
  const [username, setUserName] = useState('Kirill')
  const [persons, setPersons] = useState([
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ])

  const switchNameHandler = newName => {
    setPersons([
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ])
  }

  const nameChangedHandler = event => {
    setPersons([
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ])
  }

  const changeUserInputHandler = event => {
    setUserName(event.target.value)
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
      <UserInput username={username} change={changeUserInputHandler}/>
      <UserOutput username={username}/>
      <UserOutput username={'Irina'}>Test text</UserOutput>
    </div>
  );
}

export default App;
