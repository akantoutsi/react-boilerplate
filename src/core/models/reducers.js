import { 
    combineReducers 
} from 'redux';

import {
    model1Reducer
} from '@core/models/model1';

import {
    model2Reducer
} from '@core/models/model2';

export const rootReducer = combineReducers({
    model1: model1Reducer,
    model2: model2Reducer
});