import React from 'react';
import css_cls from './Navigations.css';

const navigations = (props) => (
    <ul className={css_cls.Navigations}>
        <NavigationItem link='/' active >Burger Builder</NavigationItem>
        <NavigationItem link='/' >Checkout</NavigationItem>
    </ul>
);

const NavigationItem = (props) => (
    <li className={css_cls.NavigationItem} > <a href={props.link} className={props.active ? css_cls.active : ''} > {props.children} </a> </li>
);

export default navigations;