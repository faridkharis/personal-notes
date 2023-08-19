import React from "react";
import { MdNoteAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function HomePageButton() {
    return (
        <Link to="/" className="nav__logo">
            <MdNoteAlt className="nav__icon" />
            <div className="nav__logo-text">
                <span className="nav__logo-top">PERSONAL</span>
                <span className="nav__logo-bottom">NOTES</span>
            </div>
        </Link>
    );
}

export default HomePageButton;