import React from "react";

function NoteHeader({ searchTitle, onSearch }) {
    return (
        <div className="note__header container">
            <div className="nav">
                <div className="nav__logo">
                    <span className="nav__logo-top">PERSONAL</span>
                    <span className="nav__logo-bottom">NOTES</span>
                </div>
                <div className="nav__search">
                    <input type="text" className="search__input" placeholder="Cari catatan" value={searchTitle} onChange={onSearch} />
                </div>
            </div>
        </div>
    )
}

export default NoteHeader;