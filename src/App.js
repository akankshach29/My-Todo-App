import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {
  state = {
    todos: [
      {todo: 'buy milk', id: 1},
      {todo: 'dentist appointment', id: 2}
    ]
  }

  deleteTodo = (id) => {
    let delToddo = this.state.todos.filter(todo => 
      {return todo.id !== id}
    )

    this.setState({
      todos: delToddo
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
