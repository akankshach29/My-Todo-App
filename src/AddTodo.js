import React from 'react';

class AddTodo extends React.Component {
    state={
        todo: ''
    }
    handleTextChange = (e) => {
        e.preventDefault()
        this.setState({
            todo : [e.target.value]
        })        
    }
    taskSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            todo: ''
        })
    }
    render(){
        return(
        <div>
          <form onSubmit={this.taskSubmit}>
            <label>Add a task</label>
            <input  
              type="text" 
              onChange={this.handleTextChange}
              value={this.state.todo}
            />
          </form>
        </div>
        )
    }    
}

export default AddTodo;