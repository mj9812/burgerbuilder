import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import css_cls from './Logo.css'

const logo = (props) => (
    <div className={css_cls.Logo}> <img src={burgerLogo} alt='Burger Logo' /> </div>
);

export default logo;