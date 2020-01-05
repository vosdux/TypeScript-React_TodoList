import React, { FC, MouseEvent } from 'react';
import { ITodo } from '../interfaces';

interface TodoProps extends ITodo {
    classes: string[],
    onRemove(id: number): void,
    onToggle(id: number): void
}

export const Todo: FC<TodoProps> = ({ classes, title, completed, id, onRemove, onToggle }) => {
    const removeHandler = (event: MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id)
    }

    return (
        <li className={classes.join(' ')} key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={onToggle.bind(null, id)} />
                <span>{title}</span>
                <i className="material-icons red-text" onClick={(event) => removeHandler(event, id)}>delete</i>
            </label>
        </li>
    );
}
