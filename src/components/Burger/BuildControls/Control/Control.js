import React from 'react';
import css_cls from './Control.css';

const control = (props) => (
    <div className={css_cls.BldControl}>
        <div className={css_cls.BldLabel}> { props.ingredientLabel } </div>
        <button className={css_cls.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={css_cls.More} onClick={props.added}>More</button>
    </div>
);

export default control;