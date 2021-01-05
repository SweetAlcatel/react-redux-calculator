
const initialState = {
    counter: 0,
    operation: null,
    operand: 0,
    operator: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'changeDisplayData':
            return {
                ...state,
                counter: action.payload
            };
        case 'changeOperation':
            return {
                ...state,
                operation: action.payload
            };
        case 'setOperand':
            return {
                ...state,
                operand: action.payload
            };
        case 'setOperator':
            return {
                ...state,
                operator: action.payload
            };
        case 'clearInput':
            return initialState;
        default: 
        return state;
    }
};

export default reducer;