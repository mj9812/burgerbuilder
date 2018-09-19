import React from 'react';
import css_cls from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' } ];
    
const buildControls = (props) => (
    <div className={css_cls.BuildControls}>
        <p>Current Price : {props.price.toFixed(2)} $ </p>
        { controls.map(ctrl => ( <BuildControl key={ctrl.type} ingredientLabel={ctrl.label} disabled={props.disabled[ctrl.type]}
        added={() => props.ingredientsAd(ctrl.type)} removed={() => props.ingredientsRm(ctrl.type)} /> ))}
        <button className={css_cls.OrderButton} disabled={props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
);

const BuildControl = (props) => (
    <div className={css_cls.BldControl}>
        <div className={css_cls.BldLabel}> { props.ingredientLabel } </div>
        <button className={css_cls.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={css_cls.More} onClick={props.added}>More</button>
    </div>
);

export default buildControls;