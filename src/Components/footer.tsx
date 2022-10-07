import React from "react";
import {NavLink} from "react-router-dom";

type FooterProps = {
    numberOfTodos:number;
    clearCompleted:()=>void;
}



export const Footer = ({numberOfTodos, clearCompleted}:FooterProps) => {

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{numberOfTodos}</strong> {numberOfTodos === 1 ? ' item ':' items '} left</span>
            <ul className="filters">
                <li>
                    <NavLink className={(isActive) => isActive? 'selected':undefined} to="/all">All</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive? 'selected':undefined} to="/active">Active</NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => isActive? 'selected':undefined} to="/completed">Completed</NavLink>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
        );
}

export default Footer;
