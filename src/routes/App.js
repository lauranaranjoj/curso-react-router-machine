import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { NotFoundPage } from "./notFound/NotFoundPage";
import { useTodos } from "./useTodos";

function App(){
    const { state, stateUpdaters } = useTodos();

    return(
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage state={state}  stateUpdaters={stateUpdaters}/>} />
            <Route path="/new" element={
                <NewTodoPage 
                    addTodo={stateUpdaters.addTodo}
                    loading={state.loading} 
                />} /> 
            <Route path="/edit/:id" element={
                <EditTodoPage 
                    editTodo={stateUpdaters.editTodo} 
                    getTodo={state.getTodo}
                    loading={state.loading}
                />} /> 
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </HashRouter>
    );
}

export { App };