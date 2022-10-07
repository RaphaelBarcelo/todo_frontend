import React from 'react';
import './App.css';
import TodoPage from './Components/todoPage';
import {Navigate, Route, Routes} from "react-router"
import {BrowserRouter} from "react-router-dom"
import {Filter} from "./Components/filter.enum";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/all" element={<TodoPage filter={Filter.ALL}/>} />
                <Route path="/active" element={<TodoPage filter={Filter.ACTIVE}/>} />
                <Route path="/completed" element={<TodoPage filter={Filter.COMPLETED}/>} />
                <Route path="/" element={<Navigate to={"/all"}/>} />
            </Routes>
        </BrowserRouter>
  );
};
export default App;