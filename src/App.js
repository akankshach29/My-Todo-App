import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
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

  addTodo = (todo) => {
    todo.id = Math.random();
    let task = [...this.state.todos, todo]
    this.setState({
      todos: task
    })
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row" style={{ display: 'flex' }}>
            <div className="App" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <h1>Todo's</h1>
              <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
              <AddTodo addTodo={this.addTodo} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
