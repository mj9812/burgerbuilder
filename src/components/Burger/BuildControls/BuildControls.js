import React from 'react';
import css_cls from './BuildControls.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const controls = [
    { label: 'Salad', type: BurgerIngredient.TYPE.Salad },
    { label: 'Bacon', type: BurgerIngredient.TYPE.Bacon },
    { label: 'Cheese', type: BurgerIngredient.TYPE.Cheese },
    { label: 'Meat', type: BurgerIngredient.TYPE.Meat } ];
    
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