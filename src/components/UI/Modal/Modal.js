import React from 'react';
import './Modal.css';
import Backdrop from '../Reusable/Backdrop'

const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.closeModal} />
        <div className='Modal' style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default modal;