import { setup } from '@gothub-team/got-react';
import { reduxStore } from './redux';

export const {
    useGraph: createGraph,
    store: gotStore,
    api: gotApi,
} = setup({
    host: 'https://api.gothub.io',
    reduxStore,
    baseState: 'got',
});
