import React from 'react';
import { CounterControls, Button } from './Controls.styled';

export const Controls = ({onIncrement, onDecrement}) => (
    <CounterControls>
        <Button type='button' onClick={onIncrement}>Збільшити на 1</Button>
        <Button type='button' onClick={onDecrement}>Зменшити на 1</Button>
    </CounterControls>
);


