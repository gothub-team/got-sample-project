import { setup } from '@gothub-team/got-react';
import { sha3_224 as sha } from 'js-sha3';
import { reduxStore } from './redux';

export const {
    useGraph,
    store: gotStore,
    api: gotApi,
} = setup({
    host: 'https://api.gothub.io',
    reduxStore,
    baseState: 'got',
});

export const getUserId = () => {
    const { email } = gotApi.getCurrentUser();
    return sha(email);
};
