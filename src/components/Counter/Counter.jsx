import React, {Component} from 'react';
import {Controls} from 'components/Controls/Controls';

import {CounterWrapper, CounterValue} from 'components/Counter/Counter.styled';


export class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    // static propTypes = {

    // }
    
    state = {
        value: this.props.initialValue,
    };



    // ----------------------------------------rewrite value
    // handleIncrement = event => {
    //     this.setState({
    //         value: 10,
    //     });
    // }
    // -------------------------------------------




    handleIncrement = () => {
        this.setState( (prevState) => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = () => {
        this.setState( (prevState) => {
            return {
                value: prevState.value - 1,
            };
        });
    }

    render() {
        return(
            <CounterWrapper>
                <CounterValue>{this.state.value}</CounterValue>
                <Controls 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                {/* <CounterControls>
                    <Button type='button' onClick={this.handleIncrement}>Збільшити на 1</Button>
                    <Button type='button' onClick={this.handleDecrement}>Зменшити на 1</Button>
                </CounterControls> */}
            </CounterWrapper>
        );
    }
} 

// export default Counter;
