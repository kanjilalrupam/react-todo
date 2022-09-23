import React,{useState} from "react";
import './Todo.css';
let globalid = 0;
function Todo(){

    const [todos,setTodos] = useState([]);
    const [tasks,setTasks] = useState('');

    function addtodos(todo){
    todo.preventDefault();
        setTodos(oldtodos => {
            setTasks('');
            return( [...oldtodos, {todo: tasks, id:globalid++}])
        })
    }

    function deleteitem(e){
        setTodos((old)=> old.filter( item => item.id !== e)); 
      }

    return(
        <div className="container">
            <h1>Todo App</h1>
            
            <form action="" onSubmit={addtodos}>
                <input type="text" placeholder="Enter Todo.." value={tasks} onChange={e=> setTasks(e.target.value)}/>
                <button type="submit" className="btn">Add Todo</button>
            </form>
            <div className="todo-container">
                
                <ul className="todo-list">
                    {todos.map((item)=>{
                        return(
                            <div className="todo-element" key={item.id}>
                                <li className="todo">{item.todo}</li>
                                <button className="delete-todo" onClick={() => {deleteitem(item.id)}}>DELETE</button>
                            </div>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Todo;