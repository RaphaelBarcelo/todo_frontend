import React from 'react';
import {Item} from "./item";
import {Todo} from "./models";

export const List = ({ todos}: { todos: Todo[]}) => {

    const rows = todos.map((todo) => {
        return (
            <Item todo={todo}/>
        );
    });

    return (
        <ul className = "todo-list" >
            {rows}
        </ul>)
}
/*<tbody>{rows}</tbody>*/
export default List;