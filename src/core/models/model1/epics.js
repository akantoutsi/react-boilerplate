import { 
    ofType 
  } from 'redux-observable';

import { 
    withLatestFrom, 
    map 
} from 'rxjs/operators';

export const modelEpic1 = (action$, state$) => {
    return action$
        .pipe(
            ofType('Action'),
            withLatestFrom(state$),
            map(([a, b]) => console.log(a, b))
        )
}

export const modelEpic2 = (action$, state$) => {
    return action$
        .pipe(
            ofType('Action'),
            withLatestFrom(state$),
            map(([a, b]) => console.log(a, b))
        )
}

export const model1Epics = {
    modelEpic1,
    modelEpic2
};