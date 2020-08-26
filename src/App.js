import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Do Dishes",
        completed: false
      },
      {
        id: 2,
        title: "Go for run",
        completed: false
      },
      {
        id: 3,
        title: "Read book",
        completed: false
      }
    ]
  }
  
  render () {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
