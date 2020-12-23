const changeDisplayData = (payload) => ({ type: 'changeDisplayData', payload });

const changeOperation = (payload) => ({ type: 'changeOperation', payload });

const setOperand = (payload) => ({ type: 'setOperand', payload });

const setOperator = (payload) => ({ type: 'setOperator', payload });
 
const clearInput = () => ({ type: 'clearInput' });

export {
    changeDisplayData,
    changeOperation,
    setOperand,
    setOperator,
    clearInput
};

