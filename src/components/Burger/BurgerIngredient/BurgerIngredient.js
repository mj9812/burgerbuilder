import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';
import css_cls from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case (BurgerBuilder.TYPE.BreadBottom):
                ingredient = <div className={css_cls.BreadBottom}></div>;
                break;
            case (BurgerBuilder.TYPE.BreadTop):
                ingredient = (<div className={css_cls.BreadTop}>
                    <div className={css_cls.Seeds1}></div>
                    <div className={css_cls.Seeds2}></div>
                </div>);
                break;
            case (BurgerBuilder.TYPE.Meat):
                ingredient = <div className={css_cls.Meat}></div>;
                break;
            case (BurgerBuilder.TYPE.Cheese):
                ingredient = <div className={css_cls.Cheese}></div>;
                break;
            case (BurgerBuilder.TYPE.Bacon):
                ingredient = <div className={css_cls.Bacon}></div>;
                break;
            case (BurgerBuilder.TYPE.Salad):
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