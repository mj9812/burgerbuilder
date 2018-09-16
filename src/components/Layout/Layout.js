import React from 'react';
import './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className='BurgerLayoutContent'>
            {props.children}
        </main>
    </React.Fragment>
); // wrapped in paranthesis are json components

export default layout;