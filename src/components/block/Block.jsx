import React from 'react';

import './block.scss';

const Block = ({ min, max, beg, end }) => {
    const style = {
        left: ((min + beg) / max) * 100 + '%',
        width: ((end - beg) / max) * 100 + '%',
    };

    return <div className="block" style={style}></div>;
};

Block.propTypes = {};

export default Block;
