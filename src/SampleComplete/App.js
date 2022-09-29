import React from 'react';
import { Provider } from 'react-redux';
import { LoginForm } from '../Components/LoginForm';
import { getUserId } from './got.config';
import { reduxStore } from './redux';
import { TodoListScreen } from './TodoListScreen';
import { useAuth } from './useAuth';

export const App = () => {
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
