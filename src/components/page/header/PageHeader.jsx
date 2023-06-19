import React from "react";
import PropTypes from "prop-types";

import "./page-header.scss";

const PageHeader = ({ title }) => {
    return (
        <div className="page-header">
            {title}
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string
};

export default PageHeader;