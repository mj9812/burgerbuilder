import React from 'react';
import './Control.css';

const control = (props) => (
    <div className='BldControl'>
        <div className='BldLabel'> { props.ingredientLabel } </div>
        <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className='More' onClick={props.added}>More</button>
    </div>
);

export default control;