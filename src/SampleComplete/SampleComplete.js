import React from 'react';
import { Provider } from 'react-redux';
import { LoginForm } from '../Components/LoginForm';
import { reduxStore } from './redux';
import { TodoListScreen } from './TodoListScreen';
import { useAuth } from './useAuth';
import { getUserId } from './useUserNode';

export const SampleComplete = () => {
    const [loggedIn, login, logout] = useAuth();

    if (!loggedIn) {
        return (
            <LoginForm login={login} />
        );
    }

    return (
        <Provider store={reduxStore}>
            <TodoListScreen
                nodeId={getUserId()}
            />
        </Provider>
    );
};
