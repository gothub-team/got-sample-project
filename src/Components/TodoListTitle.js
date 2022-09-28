import React, { useState } from 'react';

export const TodoListTitle = ({
    value = '', onChange, onConfirm, onCancel,
}) => {
    const [edit, setEdit] = useState(false);

    if (edit) {
        return (
            <div className="title">
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
                <button
                    onClick={() => { setEdit(false); onCancel && onCancel(); }}
                >
                    Cancel
                </button>
                <button
                    onClick={() => { setEdit(false); onConfirm && onConfirm(); }}
                >
                    Confirm
                </button>
            </div>
        );
    }

    return (
        <div className="title">
            {value || 'Unnamed todo-list'}
            <button onClick={() => setEdit(true)}>Edit</button>
        </div>
    );
};
