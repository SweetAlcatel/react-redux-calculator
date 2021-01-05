import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDisplayData, changeOperation, setOperand, setOperator, clearInput } from '../actions';
import './button.css';

const Button = ({ label, value, counter, operation, operand, operator, changeDisplayData, changeOperation, setOperand, setOperator, clearInput }) => {

    function changeDisplay() {
        let output;
        let isDisplayZero = counter === 0 && label !== 0 ? true : false;
        const operations = {
            '−': (operand, operator) => Number(operand) - Number(operator),
            'x': (operand, operator) => Number(operand) * Number(operator),
            '÷': (operand, operator) => Number(operand) / Number(operator),
            '+': (operand, operator) => Number(operand) + Number(operator)
        }
        switch(value){
            case 'number':
                if (counter === 0 && label === 0) {
                    output = 0;
                }else if(!operator && operation && operand){
                    output = label;
                    setOperator(output);
                }else if(operator && operation && operand){
                    output = "" + counter + label;
                    setOperator(output);
                }else if(isDisplayZero){
                    output = label;
                }else{
                    output = "" + counter + label;
                }
                return changeDisplayData(output);
            case 'clear':
                if(!isDisplayZero)
                    return clearInput();
                break;
            case 'toggle':
                if(!isDisplayZero){
                    output = counter * -1;
                    return changeDisplayData(output);
                }
                break;
            case 'dot':
                if(counter.toString().indexOf('.') < 0){
                    output = counter + '.';
                    return changeDisplayData(output);
                }
                break;
            case 'percent':
                if(!isDisplayZero){
                    output = counter / 100;
                    return changeDisplayData(output);
                }
                break;
            case 'operation':
                if(!isDisplayZero && !operand && label !== '='){
                    setOperand(counter);
                    changeOperation(label);
                }else if(operand && !operator && counter === operand && label !== "="){
                    changeOperation(label);
                }else if(label === '=' || operand && !isDisplayZero){
                    let current_operation = label === '=' ? operation : label;
                    let evaluation = operations[operation](operand, operator);
                    changeDisplayData(evaluation);
                    setOperand(evaluation);
                    setOperator(0);
                    changeOperation(current_operation);
                }
                    
                break;
            default: 
                return {
                    counter: 0,
                    operation: null,
                    operand: 0,
                    operator: 0
                };
        };
    };

    return (
        <div className='btn btn-primary' onClick={changeDisplay}>
            {label}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        operation: state.operation,
        operand: state.operand,
        operator: state.operator
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDisplayData: bindActionCreators(changeDisplayData, dispatch),
        changeOperation: bindActionCreators(changeOperation, dispatch),
        setOperand: bindActionCreators(setOperand, dispatch),
        setOperator: bindActionCreators(setOperator, dispatch),
        clearInput: bindActionCreators(clearInput, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);