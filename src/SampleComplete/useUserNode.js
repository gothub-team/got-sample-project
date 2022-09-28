import { useMemo } from 'react';
import { sha3_224 as sha } from 'js-sha3';
import { gotApi } from './got.config';

export const getUserId = () => {
    const { email } = gotApi.getCurrentUser();
    return sha(email);
};

export const useUserNodeId = () => useMemo(() => getUserId, [gotApi.getCurrentUser()]);
