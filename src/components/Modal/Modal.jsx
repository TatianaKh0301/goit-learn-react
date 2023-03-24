import React, { Component } from "react";
import { createPortal } from "react-dom";
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            console.log("Нажали ESC, нужно закрыть модалку");
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }        
    }

    render() {
        return createPortal(
            <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
                <div className="Modal__content">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

