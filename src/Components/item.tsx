import React from "react";
import {Todo} from "./models";

export const Item = ({todo}:{todo:Todo}) => {
    //Ici jusqu a trouver comment destructurer en gardant l'objet to-do en tant que parametre
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    const handleOnClick = () => {
        todo.onDelete(id)
    }

    const handleOnCheck = () => {
        todo.onComplete(id)
    };

    return (
        <li>
            <div key={id}>
                <input type="checkbox" onChange={handleOnCheck} checked={completed}/>
                <label>{id}</label>
                <label>{title}</label>
                <button onChange={handleOnClick}>Delete</button>
            </div>
        </li>
    );
}