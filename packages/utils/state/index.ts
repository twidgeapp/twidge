import React from 'react';
import Spaces from './spaces';

interface IState {
    spaces: Spaces;
}

const StateContext = React.createContext<IState>({
    spaces: new Spaces(),
});

export default StateContext;
