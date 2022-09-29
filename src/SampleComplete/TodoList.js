import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import { InputForm } from '../Components/InputForm';
import { Todo } from '../Components/Todo';
import { useGraph } from './got.config';

export const TodoList = ({ nodeId }) => {
    const {
        pull, useView, add, remove, push,
    } = useGraph('main', 'edit-list');

    const view = {
        [nodeId]: {
            as: 'todoList',
            edges: {
                'todo-list/todo': {
                    as: 'todos',
                    include: {
                        node: true,
                        edges: true,
                    },
                },
            },
        },
    };

    useEffect(() => {
        pull(view);
    }, []);

    const viewRes = useView(view);
    const todos = Object.values(viewRes.todoList.todos || {}).sort((a, b) => a.node.name > b.node.name ? 1 : -1);

    return (
        <div className="todo-list">
            <InputForm
                onConfirm={name => {
                    const newTodo = { id: v4(), name };
                    add('todo-list/todo')(nodeId)(newTodo);
                    // merge(); clear();
                    push();
                }}
            />
            {todos.map(todo => (
                <Todo
                    key={todo.nodeId}
                    name={todo.node.name}
                    onDelete={() => {
                        remove('todo-list/todo')(nodeId)(todo.node);
                        // merge(); clear();
                        push();
                    }}
                />
            ))}
        </div>
    );
};
