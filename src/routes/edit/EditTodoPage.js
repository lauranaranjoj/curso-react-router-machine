import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useParams, useLocation } from "react-router-dom";

function EditTodoPage({editTodo, getTodo, loading}){

   console.log('render edit');
   
   const location = useLocation();
   const params  = useParams();
   const id = Number(params.id);   

   let todoText;

//    if(loading){
//     return <p>Cargando...</p>
//    }
   
   if(location.state && !loading){
    console.log('get location.state');
    todoText = location.state.text;    
   }
   else if(!loading){
    console.log('getTodo()');
    const todo = getTodo(id);
    if(!todo){
        return <p>No se encuentra la tarea #{id}</p>
    }
    todoText = todo.text;
   }

    return(
        <TodoForm 
            label="Edita tu Todo"
            submitText='Actualizar'
            submitEvent={(newText) => editTodo(id, newText)}
            initialText={todoText}
            loading={loading}
        />
    );
}

export { EditTodoPage };