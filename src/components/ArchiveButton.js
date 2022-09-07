import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
    return (
        <button className="secondary__button button-archive" onClick={() => onArchive(id)}>
            <i className='bx bxs-archive-in'></i>
            {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
    )
}

export default ArchiveButton;