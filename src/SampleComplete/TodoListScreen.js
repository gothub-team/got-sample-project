import React from 'react';
import { useGraph } from './got.config';
import { TodoListTitle } from '../Components/TodoListTitle';
import { TodoList } from './TodoList';

export const TodoListScreen = ({ nodeId }) => {
    const {
        useView, update, clear, merge, push,
    } = useGraph('main', 'edit-title');

    const view = {
        [nodeId]: {
            include: {
                node: true,
            },
        },
    };

    const viewRes = useView(view);
    const todoList = viewRes[nodeId].node;

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
