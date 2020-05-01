import React, { Component } from 'react'; //React hooks are using 'useSomething'
import Person from '../components/Persons/Person/Person';
import styled from 'styled-components';
import './App.css';


// Regular CSS goes in here
const StyleButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'pink' : 'lightgreen'};
    color: black
  }
`;

class App extends Component {

  state = { // Returns 2 elements (currentState, functionToUpdateState)
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Trist', age: 29},
      { id: '3', name: 'Louis', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangeHandler = ( event, id ) => {

    // Gets the index of the passed through person 
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // Creates person variable and gets individual person from provided index
    const person = {
      ...this.state.persons[personIndex]
    };

    // Changes the name of the person chosen to be the name hard-coded
    person.name = event.target.value;

    // Assigns copies persons array to persons Const
    const persons = [...this.state.persons];
    
    // Assigns individual person to matching person
    persons[personIndex] = person;

    this.setState({ persons: persons })

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); --> Slice without args, copies array
    const persons = [...this.state.persons]; // More modern way to copying array
    persons.splice(personIndex, 1); // Removes 1 person from array
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // This gets true or false for if person is to show
    const doesShow = this.state.showPersons;
    // Sets the opposite state accordingly
    this.setState({showPersons: !doesShow});
  }

  render () {

    //persons will hold div information
    let persons = null;
    // Here, a list of persons will be rendered to the DOM
    if ( this.state.showPersons ) { // if TRUE
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // Key helps only the elements that changed to re-render, not the whole list
            return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age}
                key = {person.id}
                changed = {( event ) => this.nameChangeHandler( event, person.id )} />
          })}
        </div> 
      );
    }

    // const --> Never assigning new value | let --> Variable could change
    const assingedClass = [];
    if (this.state.persons.length <= 2){
      assingedClass.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assingedClass.push('bold'); // classes = ['red', 'bold']
    }

    // classes.join(' ') --> will join the class names as a string

    return (
      // JSX Code Below, not HTML
      <div className="App">
        <h1>Hi, I am a React app</h1>  
        <p className = {assingedClass.join(' ')}>This is really working!</p>
        <StyleButton alt = {this.state.showPersons} onClick = {this.togglePersonsHandler}> Switch Name </StyleButton> 
        {persons} 
      </div>
    );
  }

}

export default App;