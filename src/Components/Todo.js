import React from 'react';

export const Todo = ({ name = 'Unnamed Todo', onDelete }) => (
    <div className="todo">
        <button
            onClick={() => { onDelete && onDelete(); }}
        >
            Delete
        </button>
        {name}
    </div>
);
