import React from "react";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

function DeleteButton(props) {
    const { onClick } = props;
    const { locale } = React.useContext(LocaleContext);

    return (
        <button className="secondary__button button-delete" onClick={onClick}>
            <i className='bx bxs-trash'></i>
            {locale === 'id' ? 'Hapus' : 'Delete'}
        </button>
    )
}

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default DeleteButton;