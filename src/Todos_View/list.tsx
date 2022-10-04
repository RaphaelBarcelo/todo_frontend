import React from 'react';

const TodoList = ({ todos }: { todos: string[] }) => {
    const rows = todos.map((todo) => {
        return (
            <tr key={todo}>
                <td><button >Completed</button></td>
                <td>{todo}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}
//onClick={() => props.removeTodo(index)}

const TodoListFooter = () => {
    return (
        <thead>
        <tr>
            <th>All</th>
            <th>Active</th>
            <th>Completed</th>
        </tr>
        </thead>
    );
}

const Table = ({ todos, complete }: { todos: string[], complete: () => {} }) => {
    return (
        <table>

            <tbody>
            <    // @ts-ignore
                TodoList todos={todos} complete={complete} />
            </tbody>
        </table>
    );
}

{/*<TodoListFooter />
            <    // @ts-ignore
                TodoList todos={todos} completed={completed} />*/
}

export default Table;


/*
*
* */