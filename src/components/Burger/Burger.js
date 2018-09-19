import React from 'react';
import css_cls from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredients.length === 0) transformedIngredients = <p>Please add ingredients...</p>
    return (
        <div className={css_cls.Burger}>
            <BurgerIngredient type={BurgerBuilder.TYPE.BreadTop} />
                {transformedIngredients}
            <BurgerIngredient type={BurgerBuilder.TYPE.BreadBottom} />
        </div>
    );
};

export default burger;