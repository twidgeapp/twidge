import React from 'react';
import Spaces from './spaces';
import User from './user';
import GlobalState from './global';

interface IState {
    spaces: Spaces;
    user: User;
    global: GlobalState;
}

const StateContext = React.createContext<IState>({
    spaces: new Spaces(),
    user: new User(),
    global: new GlobalState(),
});

export default StateContext;
