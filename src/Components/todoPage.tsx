import React, {useState} from "react";
import TodoCreate from "./todoCreate";
import {List} from './list';
import {Footer} from './footer';
import {Todo} from "./models";

const TodoPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        setTodos(state_todos => [
            ...state_todos,
            {id: Math.random(), title: title, completed: false, onDelete: deleteTodo, onComplete: setCompleted},
        ]);
    }

    const deleteTodo = (id: number) => {
        setTodos(todos => todos.filter((todo) => (todo.id !== id)))
    }

    const setCompleted = (id: number) => {
        setTodos(todos => [...todos].map((todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
            return todo;
        })))
    }

    return (
        <body>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoCreate onTodoCreate={(value) => addTodo(value)}/>
            </header>
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <List todos={todos}/>
            </section>
            <Footer/>
        </section>
        </body>
    );
}

export default TodoPage;