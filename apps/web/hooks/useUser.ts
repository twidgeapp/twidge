import StateContext from '@twidge/utils/state';
import { useContext, useEffect } from 'react';
import { trpc } from '../utils/trpc';

const useUser = () => {
    const { data } = trpc.user.get.useQuery();
    const { user } = useContext(StateContext);

    useEffect(() => {
        if (data) {
            user.setUser(data);
        }
    }, [data]);

    return user;
};

export default useUser;
