import React from "react";

type TodoItemProps = {
    id:number;
    title:string;
    completed:boolean;
    handleComplete:()=>void;
    handleDelete:()=>void;
}

export const Item = ({id, title, completed, handleComplete, handleDelete}:TodoItemProps) => {
    //only for testing
    let idToString = "" + id;
    idToString = String(id);
    const idWithTitle = ("ID:" +idToString + " _ _ _ TITLE:" + title);

    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={handleComplete} checked={completed}/>
                <label>{idWithTitle}</label>
                <button className="destroy" onClick={handleDelete}/>
            </div>
            <input className="edit" value=""/>
        </li>
    );
}