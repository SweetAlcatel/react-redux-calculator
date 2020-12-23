import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import './app.css';

const App = ({ counter, buttonss, operation, operator, operand, changeDisplayData, changeOperation, setOperand, setOperator, clearInput }) => {

    const keyButton = buttonss.map((button) => {
        return button.key;
    });

    const changeCounter = () =>  {

        let output;
        const isDisplayZero = counter === 0  && keyButton !== 0 ? true : false;
        const operations = { 
            '+': (operand, operator) => Number(operand) + Number(operator),
            '-': (operand, operator) => Number(operand) - Number(operator),
            '*': (operand, operator) => Number(operand) * Number(operator),
            '/': (operand, operator) => Number(operand) / Number(operator)
        };

        switch(keyButton) {
            case 'number':
                if(counter === 0 && keyButton === 0) {
                    return output = 0;
                } else if (!operator && operation && operand) {
                    output = keyButton;
                    setOperator(output);
                } else if(operator && operation && operand) {
                    output = '' + counter + keyButton;
                    setOperator(output);
                } else if (isDisplayZero) {
                    output = keyButton;
                } else {
                    output = '' + counter + keyButton;
                };
                return changeDisplayData(output);
            case 'clear':
                if(!isDisplayZero) {
                    return clearInput();
                };
            case 'toggle':
                if(!isDisplayZero) {
                    output = counter * -1;
                    return changeDisplayData(output);
                };
                break;
            case 'dot':
                if(counter.toString().indexOf('.') < 0) {
                    output = counter + '.'
                    return changeDisplayData(output);
                };
                break;
            case 'percent': 
            if(!isDisplayZero) {
                output = counter / 100;
                return changeDisplayData(output);
            }
            break;
            case 'operation':
                if(!isDisplayZero && !operand && keyButton !== '=') {
                    setOperand(counter);
                    changeOperation(keyButton);
                } else if(operand && !operator && counter === operand && keyButton !== '=') {
                    changeOperation(keyButton);
                } else if (keyButton === '=' || operand && !isDisplayZero) {
                    let current_operation = keyButton === '=' ? operation : keyButton;
                    let evaluation = operations[operation](operand, operator);
                    changeDisplayData(evaluation);
                    setOperand(evaluation);
                    setOperator(0);
                    changeOperation(current_operation);
                }

                break;
            default: 
                return;
        }
    };


    return (
        <div className="calculator">
            <div>
                {counter}
            </div>
            <div className="buttons">
                {
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

    const { counter, buttonss, operation, operand, operator } = state;

    return {
        counter: counter,
        buttonss: buttonss,
        operator: operator,
        operand: operand,
        operation: operation
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        changeDisplayData: bindActionCreators(actions.changeDisplayData, dispatch),
        changeOperation: bindActionCreators(actions.changeOperation, dispatch),
        setOperand: bindActionCreators(actions.setOperand, dispatch),
        setOperator: bindActionCreators(actions.setOperator, dispatch),
        clearInput: bindActionCreators(actions.clearInput, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


