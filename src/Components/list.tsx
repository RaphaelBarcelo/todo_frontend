import React from 'react';
import {Item} from "./item";
import {Todo} from "./models";

type TodoListProps = {
    todos:Todo[];
    onComplete:(id:number)=>void;
    onDelete:(id:number)=>void;
}

export const List = ({todos, onComplete, onDelete}:TodoListProps) => {

    const handleComplete = (id:number) => {
        onComplete(id)
        console.log('completed ' + id)
    };

    const handleDelete = (id:number) => {
        onDelete(id)
        console.log('handleDelete'  + id)
    }

    const rows = todos.map(({id,title, completed}) => {
        return (
                <Item
                    key={id}
                    id= {id}
                    title= {title}
                    completed = {completed}
                    handleComplete={()=>handleComplete(id)}
                    handleDelete={()=>handleDelete(id)}/>
        );
    });

    return (
        <ul className = "todo-list" >
            {rows}
        </ul>)
}
/*<tbody>{rows}</tbody>*/
export default List;