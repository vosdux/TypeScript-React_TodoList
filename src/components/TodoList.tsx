import React, { FC } from 'react';
import { ITodo } from '../interfaces';
import { Todo } from './Todo';

interface TodoListProps {
    todos: ITodo[],
    onToggle(id: number) : void,
    onRemove(id: number) : void
};

export const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0) {
        return (
            <p>Пока дел нет!</p>
        )
    }
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <Todo
                        classes={classes}
                        title={todo.title}
                        completed={todo.completed}
                        id={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                )
            })}
        </ul>
    );
};
