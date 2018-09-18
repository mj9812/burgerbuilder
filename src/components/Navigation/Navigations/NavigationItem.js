import React from 'react';
import css_cls from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={css_cls.NavigationItem} > <a href={props.link} className={props.active ? css_cls.active : ''} > {props.children} </a> </li>
);

export default navigationItem;