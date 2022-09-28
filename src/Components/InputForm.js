import React, { useState } from 'react';

export const InputForm = ({ onConfirm }) => {
    const [value, setValue] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (value) {
                onConfirm && onConfirm(value);
                setValue('');
            }
        }}
        >
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};
