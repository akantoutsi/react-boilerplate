import { 
    combineEpics 
} from 'redux-observable';

import { 
    model1Epics 
} from '@core/models/model1';

import { 
    model2Epics 
} from '@core/models/model2';

export const rootEpic = combineEpics(model1Epics, model2Epics);
