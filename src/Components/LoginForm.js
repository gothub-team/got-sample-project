import React, { useState } from 'react';

export const LoginForm = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-screen">
            <form onSubmit={e => {
                e.preventDefault();
                login({ email, password });
            }}
            >
                <input
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};
