import React, {Fragment, useState} from "react";
import TodoCreate from "./todoCreate";
import {List} from './list';
import {Footer} from './footer';
import {Todo} from "./models";
import {Filter} from "./filter.enum";

type TodoPageProps = {
    filter:Filter
}

const TodoPage = ({filter}:TodoPageProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const displayedTodos = todos.filter((todo)=>{
        switch (filter){
            case Filter.ALL:
                return true;
            case Filter.ACTIVE:
                return !todo.completed
            case Filter.COMPLETED:
                return todo.completed
            default:
                return true;
        }
    })

    const addTodo = (title: string) => {
        const randomId:number = Math.floor((Math.random() * 10000));
        setTodos(state_todos => [
            ...state_todos,
            {id: randomId, title: title, completed: false, onDelete: deleteTodo, onComplete: setCompleted},
        ]);
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

    const deleteTodo = (id: number) => {
        setTodos(todos => todos.filter((todo) => (todo.id !== id)))
    }

    const clearCompleted = () => {
        setTodos(todos => todos.filter((todo) => (todo.completed == false)))
    }

    const displayMainAndFooter = () => {
        return(
            <>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox"/>
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <List
                        todos={displayedTodos}
                        onComplete={setCompleted}
                        onDelete={deleteTodo}
                    />
                </section>
                <Footer
                    numberOfTodos={displayedTodos.length}
                    clearCompleted={clearCompleted}
                />
            </>
        );
    }

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoCreate onTodoCreate={(value) => addTodo(value)}/>
            </header>
            {todos.length > 0 && displayMainAndFooter()}
        </section>
    );
}

export default TodoPage;