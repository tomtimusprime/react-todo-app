import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Footer from "./components/layout/Footer";

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

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        <Footer />
      </div>
    );
  }
}

export default App;
