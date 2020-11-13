import './App.css';
import Person from './Person/Person'

function App() {
  const state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <p>This is really working!</p>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age} >My hobbies: Racing</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
  );
}

export default App;
