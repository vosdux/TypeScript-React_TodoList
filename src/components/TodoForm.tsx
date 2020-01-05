import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';

interface TodoFomrProps {
    onAdd(title:string) : void
}

export const TodoForm: FC<TodoFomrProps> = props => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title);
            setTitle('');
        }
    };

    return (
        <div className="input-field mt2">
            <input
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                value={title}
                type="text"
                id="title"
                placeholder="Введите дело"
            />
            <label htmlFor="title" className="active">Введите дело</label>
        </div>
    );
}
