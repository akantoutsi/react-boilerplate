const model1InitialState = {
    
}

export const model1Reducer = (state = model1InitialState, { type, payload }) => {
    switch (type) {
        case 'TEST':
            return {
                ...state,
                payload
            }
        
        default: 
            return state;
    }
}