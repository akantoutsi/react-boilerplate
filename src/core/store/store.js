import { 
    createEpicMiddleware 
}         
from 'redux-observable';

import {
    createStore,
    applyMiddleware
} from 'redux';

import { 
    rootEpic,
    rootReducer 
} from '@core/models';

const epicMiddleware = createEpicMiddleware();

epicMiddleware.run(rootEpic);

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
