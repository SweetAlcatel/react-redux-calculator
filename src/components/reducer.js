
const initialState = {
    counter: 0,
    buttonss: [
        { number: '1', key: 'number'},
        { number: '2', key: 'number'},
        { number: '3', key: 'number'},
        { number: 'C', key: 'clear'},
        { number: '4', key: 'number'},
        { number: '5', key: 'number'},
        { number: '6', key: 'number'},
        { number: '=', key: 'operation'},
        { number: '7', key: 'number'},
        { number: '8', key: 'number'},
        { number: '9', key: 'number'},
        { number: '.', key: 'dot'},
        { number: '0', key: 'number'},
        { number: '+', key: 'operation'},
        { number: '-', key: 'operation'},
        { number: '*', key: 'operation'},
        { number: '/', key: 'operation'}
    ],
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