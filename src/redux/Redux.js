
const initialState = {
    amount : 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'COUNTER_INCREAMENT': 
        return {
            ...state,
            amount : state.amount + action.payload
        };
        case 'COUNTER_DECREAMENT' :
            return {
                ...state,
                amount : state.amount - action.payload
            };
            default : 
            return state;
    }
};


export const increament = (payload) => ({
    type: 'COUNTER_INCREAMENT',
    payload : payload
})  

export const decreaament = (payload) => ({
    type: 'COUNTER_DECREAMENT',
    payload : payload
})