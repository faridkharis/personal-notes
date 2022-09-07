import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <button className="secondary__button button-delete" onClick={() => onDelete(id)}>
            <i className='bx bxs-trash'></i>
            Hapus
        </button>
    )
}

export default DeleteButton;