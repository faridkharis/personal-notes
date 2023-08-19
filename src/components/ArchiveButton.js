import React from "react";
import PropTypes from "prop-types";

function ArchiveButton(props) {
    const { onClick, children } = props;

    return (
        <button className="secondary__button button-archive" onClick={onClick}>
            {children}
        </button>
    );
}

ArchiveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default ArchiveButton;
