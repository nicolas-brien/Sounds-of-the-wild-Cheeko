import React from "react";
import PropTypes from "prop-types";

import "./page-container.scss";

const PageContainer = ({ children }) => {
    return (
        <div className="page-container">
            {children}
        </div>
    );
};

PageContainer.propTypes = {
    children: PropTypes.any
};

export default PageContainer;