import React from 'react';
import { connect } from 'react-redux';
import './display.css';

const Display = ({ counter }) => {
    return (
        <div>
            <input value={counter} readOnly/>
        </div>
    );
};

const mapStateToProps = ({ counter }) => {
    return {
        counter
    };
};

export default connect(mapStateToProps)(Display);