// Todo component
import React from 'react'

const Todo = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
        return(
            <div key={todo.id}>
                <p onClick={() => {deleteTodo(todo.id)}}>{todo.todo}</p>
            </div>  
        )        
    })
    ) : (
        <p>Nothing left to do.</p>
    )

    return(
        <div>
            {todoList}
        </div>
    )
}

export default Todo;