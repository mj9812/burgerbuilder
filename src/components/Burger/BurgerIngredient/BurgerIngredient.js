import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css_cls from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    static TYPE = Object.freeze({
        BreadBottom: "bread-bottom",
        BreadTop: "bread-top",
        Meat: "meat",
        Cheese: "cheese",
        Salad: "salad",
        Bacon: "bacon",
    });

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case (BurgerIngredient.TYPE.BreadBottom):
                ingredient = <div className={css_cls.BreadBottom}></div>;
                break;
            case (BurgerIngredient.TYPE.BreadTop):
                ingredient = (<div className={css_cls.BreadTop}>
                    <div className={css_cls.Seeds1}></div>
                    <div className={css_cls.Seeds2}></div>
                </div>);
                break;
            case (BurgerIngredient.TYPE.Meat):
                ingredient = <div className={css_cls.Meat}></div>;
                break;
            case (BurgerIngredient.TYPE.Cheese):
                ingredient = <div className={css_cls.Cheese}></div>;
                break;
            case (BurgerIngredient.TYPE.Bacon):
                ingredient = <div className={css_cls.Bacon}></div>;
                break;
            case (BurgerIngredient.TYPE.Salad):
                ingredient = <div className={css_cls.Salad}></div>;
                break;
            default : break;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;