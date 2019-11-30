export const TEST_HELPER = () => {
    return 'TEST_HELPER';
}

export const simpleActionCreator = (type, payload) => ({ type, payload });

// export const actionCreator = namespace => data => ({
//     type: namespace,
//     payload: data,
// });

export const actionCreator = type => payload => ({
    type,
    payload
});

export const equivalentActionCreator = namespace => {
    return data => (
        {
            type: namespace,
            payload: data
        }
    )
}

export const extendedActionCreator = namespace => data => {
    const action = actionCreator(namespace)(data);
    const actionSucceded = actionCreator(`${namespace}_Succeeded`)(data);
    const actionFailed = actionCreator(`${namespace}_Failed`)(data);

    return { action, actionSucceded, actionFailed };
};