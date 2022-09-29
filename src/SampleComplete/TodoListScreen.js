import React, { useEffect } from 'react';
import { useGraph } from './got.config';
import { TodoListTitle } from '../Components/TodoListTitle';
import { TodoList } from './TodoList';

export const TodoListScreen = ({ nodeId }) => {
    const {
        pull, useView, update, clear, push,
    } = useGraph('main', 'edit-title');

    const view = {
        [nodeId]: {
            as: 'todoList',
            include: {
                node: true,
            },
        },
    };

    useEffect(() => {
        pull(view);
    }, []);

    const viewRes = useView(view);
    const todoList = viewRes.todoList.node;

    return (
        <div className="todo-list">
            <TodoListTitle
                value={todoList ? todoList.name : ''}
                onChange={name => {
                    const nodePatch = { id: nodeId, name };
                    update(nodePatch);
                }}
                onCancel={() => { clear(); }}
                onConfirm={() => {
                    // merge(); clear();
                    push();
                }}
            />
            <TodoList
                nodeId={nodeId}
            />
        </div>
    );
};
