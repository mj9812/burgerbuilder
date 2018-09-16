import React from 'react';
import './BuildControls.css';
import BldControl from './Control/Control'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price : {props.price.toFixed(2)} $ </p>
        { controls.map(ctrl => ( <BldControl key={ctrl.label} ingredientLabel={ctrl.label} disabled={props.disabled[ctrl.type]}
        added={() => props.ingredientsAd(ctrl.type)} removed={() => props.ingredientsRm(ctrl.type)} /> ))}
        <button className='OrderButton' disabled={props.purchasable}>Order Now</button>
    </div>
);

export default buildControls;