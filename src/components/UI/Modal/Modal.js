import React, { Component } from 'react';
import css_cls from './Modal.css';
import Backdrop from '../Reusable/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.closeModal} />
                <div className={css_cls.Modal} style={{
                    transform: this.props.show ?
                        'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;