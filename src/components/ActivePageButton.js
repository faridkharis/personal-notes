import React from "react";
import { Link } from "react-router-dom";
import { BiNote } from "react-icons/bi"

function ActivePageButton() {
    return (
        <Link to="/" className="nav__button"><BiNote /></Link>
    );
}

export default ActivePageButton;