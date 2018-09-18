import React from 'react';
import css_cls from './Button.css';

const button = (props) => (<button onClick={props.clicked} className={css_cls.Button +' '+ css_cls[props.btnType]}> {props.children} </button>);

export default button;
