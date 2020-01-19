const model2InitialState = {
    
}

export const model2Reducer = (state = model2InitialState, { type, payload }) => {
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