import React from 'react';

  const Todoitems = (props) =>{
    let styles;
    if(props.item.completed) {
      styles ={
        color:'red',
        textDecoration:'line-through'

      }
    }
      else {
        styles = {
          color:'blue'
        }

      }
    
       return(
           <div className='todo-item'>
            <input type="checkbox" checked ={props.item.completed} 
            onChange={() => props.handleTodos(props.item.id)}/>
            <p style={styles}>{props.item.text}</p>
           </div>
      );
}

export default Todoitems;