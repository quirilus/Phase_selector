// i've created a js file with some todo data in it, normally this data would be from an API
// I'm using the array map method to render a child component for each todo item in the todosData array
//and passing the relevant data to it. and that was the aim.

import React, {Component} from "react";
import Todoitems from "./Todoitems";
import "./style.css"
import TodosData from './todosData';

class App extends Component{
   constructor(){
    super()
          this.state = {
            todos: TodosData 
        }
        this.handleTodos = this.handleTodos.bind(this)
    }

    handleTodos(id){
        this.setState(prevState => {   
            const updateTodos = prevState.todos.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed    
                }
                return todo
            })
            return{
                todos: updateTodos
            }
        })
    }

    render(){
        const todos = TodosData.map(item => { // callback function the nested arrow 
        //function get to be executed immediatly after the map method is excuted.
        return <Todoitems item={item} key={item.id} handleTodos={this.handleTodos}  />
    })

    return(
        <div className='todo-list'>
          {todos}
        </div>
     );
    }
};
     
export default App;