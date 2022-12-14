import React, {useState,KeyboardEvent} from 'react';


type TodoCreateProps = {
    onTodoCreate:(title:string)=>void;
}

    const TodoCreate = ({onTodoCreate}: TodoCreateProps) => {
    const [todoTitle, setTodoTitle] = useState("");
    const HandeKeyUp = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            if (todoTitle.trim().length>0){
                onTodoCreate(todoTitle)
                setTodoTitle("");
            }}
        }
        return (
            <input value={todoTitle}
                   className={'new-todo'}
                   placeholder={'What needs to be done?'} autoFocus
                   onChange={(event)=>{
                       setTodoTitle(event.target.value)
                   }}
                   onKeyUp={HandeKeyUp}
            />);
}

export default TodoCreate;