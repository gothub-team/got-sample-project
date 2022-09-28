import { useEffect, useState } from 'react';
import { gotApi, gotStore } from './got.config';

export const useAuth = () => {
    const [loggedIn, setLoggedIn] = useState();

    const login = async ({ email, password }) => {
        try {
            await gotApi.login({ email, password });
            setLoggedIn(true);
        } catch (err) {
            setLoggedIn(false);
        }
    };

    const logout = async () => {
        setLoggedIn(false);
        gotApi.logout();
        gotStore.clearAll();
    };

    const refreshSession = async () => {
        setLoggedIn(!!gotApi.getCurrentUser());
        try {
            await gotApi.refreshSession();
            setLoggedIn(true);
        } catch (err) {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        refreshSession();
    }, []);

    return [loggedIn, login, logout];
};
