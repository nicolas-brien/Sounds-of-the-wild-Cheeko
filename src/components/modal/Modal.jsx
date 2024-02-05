import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import './modal.scss';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ isShown, CTALabel, onCTA, children }) => {
    const ref = useRef(null);

    const modal = (
        <div className="modal" ref={ref}>
            <div className="modal__backdrop" />
            <div className="modal__content">
                <div className="modal__modal">
                    <div className="modal__content">{children}</div>
                    <div className="modal__footer">
                        <Button onClick={onCTA}>{CTALabel}</Button>
                    </div>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        ref.current = document.createElement('div');
        portalRoot.appendChild(ref.current);

        return () => {
            portalRoot.removeChild(ref.current);
        };
    }, [isShown]);

    if (!isShown) return;

    return ReactDOM.createPortal(children, ref.current);
};

Modal.propTypes = {
    isShown: PropTypes.bool,
    CTALabel: PropTypes.string,
    onCTA: PropTypes.func,
    children: PropTypes.any,
};

export default Modal;
