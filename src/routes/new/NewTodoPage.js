import React from "react";
import { TodoForm } from '../../ui/TodoForm';

function NewTodoPage({ addTodo, loading }){
   

    return(
        <TodoForm 
            label="Agrega tu nuevo Todo"
            submitText='Añadir'
            submitEvent={(text) => addTodo(text)}
            loading={loading}
        />
    );
}

export { NewTodoPage };