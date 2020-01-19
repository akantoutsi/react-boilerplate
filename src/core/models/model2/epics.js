import { 
    ofType 
  } from 'redux-observable';

import { 
    withLatestFrom, 
    map 
} from 'rxjs/operators';

export const mpdelEpic1 = (action$, state$) => {
    return action$
        .pipe(
            ofType('Action'),
            withLatestFrom(state$),
            map(([a, b]) => console.log(a, b))
        )
}

export const mpdelEpic2 = (action$, state$) => {
    return action$
        .pipe(
            ofType('Action'),
            withLatestFrom(state$),
            map(([a, b]) => console.log(a, b))
        )
}

export const model2Epics = {
    mpdelEpic1,
    mpdelEpic2
};