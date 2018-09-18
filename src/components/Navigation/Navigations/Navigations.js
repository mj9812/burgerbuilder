import React from 'react';
import css_cls from './Navigations.css';
import NavigationItem from './NavigationItem';

const navigations = (props) => (
    <ul className={css_cls.Navigations}>
        <NavigationItem link='/' active >Burger Builder</NavigationItem>
        <NavigationItem link='/' >Checkout</NavigationItem>
    </ul>
);

export default navigations;