import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './icn-btn.scss';

export default function IconButton({ icon, ...props }) {
    return (
        <Button className="icn-btn" {...props}>
            <div className="icn-btn__icn">{icon}</div>
        </Button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    props: PropTypes.any,
};
