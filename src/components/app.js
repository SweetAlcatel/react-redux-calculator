import React from 'react';
import './app.css';
import Button from './button/button';
import Display from './display/display';
import ButtonsGroup from './buttons-group/buttons-group';

const App = () => {

    return (
        <div className='calculator'>
            <Display />
            <ButtonsGroup>
                <Button label='0' value='number' />
                <Button label='1' value='number'/>
                <Button label="2" value="number"/>  
                <Button label="3" value="number"/>
                <Button label="4" value="number"/>
                <Button label="5" value="number"/>        
                <Button label="6" value="number"/>  
                <Button label="7" value="number"/>  
                <Button label="8" value="number"/>  
                <Button label="9" value="number"/>
                <Button label="+" value="operation"/>
                <Button label="−" value="operation"/>
                <Button label="X" value="operation"/>  
                <Button label="/" value="operation"/>
                <Button label="C" value="clear"/>
                <Button label="±" value="toggle"/>
                <Button label="%" value="percent"/>  
                <Button label="●" value="dot"/>
                <Button label="=" value="operation"/>
            </ButtonsGroup>
        </div>
    );
};

export default App;

    




