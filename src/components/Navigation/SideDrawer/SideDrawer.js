import React from 'react';
import Logo from '../../Logo/Logo';
import Navigations from '../Navigations';
import css_cls from './SideDrawer.css';
import Backdrop from '../../../components/UI/Reusable/Backdrop';

const sideDrawer = (props) => {
    const atch_cls = [css_cls.SideDrawer, css_cls.Close];
    if(props.show) atch_cls[1] = css_cls.Open
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closeDrawer} />
            <div className={atch_cls.join(' ')}>
                <div className={css_cls.Logo}> <Logo /> </div>
                <nav> <Navigations /> </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;