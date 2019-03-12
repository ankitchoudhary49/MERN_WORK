import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

import './App.css';

class App extends Component {
  state={
    todos:[
      {id:1, item: 'Play badminton'},
      {id:2, item: 'Evaluate Assignments'}
    ]
  }
  deleteTodo=(id)=>{
    let todos=this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo=(item)=>{
    //console.log('In App.js',item);
    item.id=Math.random();
    const todos=[...this.state.todos, item]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h3 className="center red-text"> My Todo's </h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
