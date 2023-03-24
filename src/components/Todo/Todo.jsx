import React from "react";

export const Todo = ({completed, text, onDeleteTodo, onToggleCompleted}) => {
    return(
        <div>
            <input
                    type="checkbox"
                    className="TodoList__checkbox"
                    checked={completed}
                    onChange={onToggleCompleted}
                />
                <p className="TodoList__text">{text}</p>
                <button onClick={onDeleteTodo}>Delete</button>
        </div>
    );
}