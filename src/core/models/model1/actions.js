import { 
    actionCreator,
    extendedActionCreator,
    equivalentActionCreator,
    extendedActionCreator2,
    simpleActionCreator
} from '@core/utils';

export const actionTest = payload => ({
    type: TEST_ACTION,
    payload: payload
});
const TEST_ACTION = 'TEST_ACTION';
actionTest.type = TEST_ACTION;

// ean de dwsw payload arg, pws to dilono gia na mi vgazei: payload: undefined?????
export const d = simpleActionCreator('Action', 1);
export const a = actionCreator('Action')(1);
export const b = extendedActionCreator('Action')(4);
export const f = extendedActionCreator2('Action')(4);
export const c = equivalentActionCreator('Action')(5);
