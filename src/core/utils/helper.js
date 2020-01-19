export const TEST_HELPER = () => {
    return 'TEST_HELPER';
}

export const simpleActionCreator = (type, payload) => ({ type, payload });

// export const actionCreator = namespace => payload => ({
//     type: namespace,
//     payload: payload,
// });

export const actionCreator = type => {
    const actionCreatorFunc = payload => ({
        type,
        payload
    });

    actionCreatorFunc.type = type;
    return actionCreatorFunc;
}

// export const actionCreator = type => payload => ({
//     type,
//     payload
// });

export const equivalentActionCreator = namespace => {
    return payload => (
        {
            type: namespace,
            payload
        }
    )
}

export const extendedActionCreator2 = namespace => payload => {
    const action = {};
    action.simple = actionCreator(namespace)(payload);
    action.succeded = actionCreator(`${namespace}_Succeeded`)(payload);
    action.failed = actionCreator(`${namespace}_Failed`)(payload);

    return action;
};

export const extendedActionCreator = namespace => payload => {
    const action = actionCreator(namespace)(payload);
    const actionSucceded = actionCreator(`${namespace}_Succeeded`)(payload);
    const actionFailed = actionCreator(`${namespace}_Failed`)(payload);

    return { action, actionSucceded, actionFailed };
};