import React from "react";
import { Link } from "react-router-dom";
import { BiArchive } from "react-icons/bi"

function ArchivePageButton() {
    return (
        <Link to="/archive" className="nav__button"><BiArchive /></Link>
    );
}

export default ArchivePageButton;