import React from 'react';
import { LoginForm } from './LoginForm';
import { useAuth } from './useAuth';

export const SampleComplete = () => {
    const [loggedIn, login, logout] = useAuth();

    if (!loggedIn) {
        return (
            <LoginForm login={login} />
        );
    }

    return (
        <div />
    );
};
