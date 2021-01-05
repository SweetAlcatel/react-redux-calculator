import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDisplayData, changeOperation, setOperand, setOperator, clearInput } from '../actions';
import './button.css';

const Button = ({ label, value, counter, operation, operand, operator, changeDisplayData, changeOperation, setOperand, setOperator, clearInput }) => {
    return (
        <div className='btn btn-primary'>
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