import React, { Component } from 'react';
import './buttons-group.css';

class ButtonsGroup extends Component {
    render() {
        return (
            <div className='buttons-group'>
                {this.props.children}
            </div>
        );
    };
};

export default ButtonsGroup;