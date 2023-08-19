import React from 'react';
import { PropTypes } from 'prop-types';
import { MdLogout } from 'react-icons/md';

function LogoutButton({ logout, name }) {
    return (
        <button onClick={logout}>{name} <MdLogout /></button>
    );
}

LogoutButton.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default LogoutButton;