import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";


function AddPageButton() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <Link to="/add" className="primary__button add-page__button"><MdAdd />{locale === 'id' ? 'Catatan' : 'Note'}</Link>
    );
}

export default AddPageButton;