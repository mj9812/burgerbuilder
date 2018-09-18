import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css_cls from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={css_cls.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className={css_cls.BreadTop}>
                    <div className={css_cls.Seeds1}></div>
                    <div className={css_cls.Seeds2}></div>
                </div>);
                break;
            case ('meat'):
                ingredient = <div className={css_cls.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={css_cls.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={css_cls.Bacon}></div>;
                break;
            case ('salad'):
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