import React from 'react';
import Spaces from './spaces';
import User from './user';

interface IState {
    spaces: Spaces;
    user: User;
}

const StateContext = React.createContext<IState>({
    spaces: new Spaces(),
    user: new User(),
});

export default StateContext;
