import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className='BurgerLayoutContent'>
            {props.children}
        </main>
    </Aux>
); // wrapped in paranthesis are json components

export default layout;