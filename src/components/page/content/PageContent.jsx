import React from "react";
import PropTypes from "prop-types";

import "./page-content.scss";

const PageContent = ({ children }) => {
    return (
        <div className="page-content">
            {children}
        </div>
    );
};

PageContent.propTypes = {
    children: PropTypes.any
};

export default PageContent;