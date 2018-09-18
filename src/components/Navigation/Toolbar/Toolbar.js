import React from 'react';
import css_cls from './Toolbar.css'
import Logo from '../../Logo/Logo';
import Navigations from '../Navigations/Navigations';

const toolbar = (props) => (
    <header className={css_cls.Toolbar}>
        <div className={css_cls.DrawerToggle} onClick={props.openDrawer} >
            <div></div> <div></div> <div></div>
        </div>
        <div className={css_cls.Logo}> <Logo /> </div>
        <nav className={css_cls.DesktopOnly}> <Navigations /> </nav>
    </header>
);

export default toolbar;