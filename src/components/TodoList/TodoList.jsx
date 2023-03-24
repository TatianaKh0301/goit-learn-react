import classNames from "classnames";
import React from "react";
import './TodoList.css';
import {Todo} from "components/Todo";

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className="TodoList">
        {todos.map(({id, text, completed}) => (
            <li 
                key={id} 
                className={classNames('TodoList__item', {
                    'TodoList__item--completed': completed,
                })}
            >
                <Todo 
                    id={id} 
                    text={text} 
                    completed={completed} 
                    onDeleteTodo={() => onDeleteTodo(id)} 
                    onToggleCompleted={() => onToggleCompleted(id)}/>
            </li>
        ))}
    </ul>
);